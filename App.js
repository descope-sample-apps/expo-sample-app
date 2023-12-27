import "core-js/stable/atob";

import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import { Alert, View } from "react-native";
import { appStyles } from "./styles/Styles";
import Dashboard from "./components/Dashboard";
import LoginScreen from "./components/LoginScreen";
import { jwtDecode } from "jwt-decode";

WebBrowser.maybeCompleteAuthSession();

const descopeProjectId = process.env.EXPO_PUBLIC_DESCOPE_PROJECT_ID;
const descopeUrl = `https://api.descope.com/${descopeProjectId}`;
const redirectUri = AuthSession.makeRedirectUri();

export default function App() {
  const [authTokens, setAuthTokens] = React.useState(null);
  const [userInfo, setUserInfo] = React.useState(null);
  const discovery = AuthSession.useAutoDiscovery(descopeUrl);

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: descopeProjectId,
      responseType: AuthSession.ResponseType.Code,
      redirectUri,
      usePKCE: true,
      scopes: ["openid", "profile", "email"],
    },
    discovery
  );

  React.useEffect(() => {
    const exchangeFn = async (exchangeTokenReq) => {
      try {
        const exchangeTokenResponse = await AuthSession.exchangeCodeAsync(
          exchangeTokenReq,
          discovery
        );
        setAuthTokens(exchangeTokenResponse);
      } catch (error) {
        console.error(error);
      }
    };
    if (response) {
      if (response.error) {
        Alert.alert(
          "Authentication error",
          response.params.error_description || "something went wrong"
        );
        return;
      }
      if (response.type === "success") {
        exchangeFn({
          clientId: descopeProjectId,
          code: response.params.code,
          redirectUri,
          extraParams: {
            code_verifier: request.codeVerifier,
          },
        });
      }
    }
  }, [discovery, request, response]);

  React.useEffect(() => {
    if (authTokens && authTokens.accessToken) {
      const decodedToken = jwtDecode(authTokens.accessToken);
      console.log("DecodedToken:", decodedToken);
      setUserInfo(decodedToken);
    }
  }, [authTokens]);

  const logout = async () => {
    const revokeResponse = await AuthSession.revokeAsync(
      {
        clientId: descopeProjectId,
        token: authTokens.refreshToken,
      },
      discovery
    );
    if (revokeResponse) {
      setAuthTokens(null);
    }
  };
  console.log("authTokens: " + JSON.stringify(authTokens));
  return (
    <View style={appStyles.container}>
      {authTokens ? (
        <Dashboard userInfo={userInfo} onLogout={logout} />
      ) : (
        <LoginScreen onLogin={promptAsync} request={request} />
      )}
    </View>
  );
}
