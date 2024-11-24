export async function fetchWithAuth(url, option, refreshToken, setDataCallback, refreshUrl) {
  try {
    // Retrieve the stored userInfo from localStorage dynamically
    let stored = JSON.parse(localStorage.getItem("userInfo"));
    
    if (!stored || !stored.accessToken) {
      throw new Error("No access token found in localStorage");
    }

    // Set Authorization header dynamically from localStorage accessToken
    option.headers = option.headers || {};
    option.headers.Authorization = `Bearer ${stored.accessToken}`;

    const response = await fetch(url, option);
    
    if (response.status === 401) {
      // Token expired, refresh it
      const newAccessToken = await refreshTokens(refreshToken, refreshUrl);
      // Update the Authorization header with the new access token
      option.headers.Authorization = `Bearer ${newAccessToken}`;
      
      return fetchWithAuth(url, option, refreshToken, setDataCallback, refreshUrl);
    }
    
    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }
    
    const data = await response.json();
    if (setDataCallback) setDataCallback(data.data); // Call the callback with fetched data
    return data; // Return data for further use
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function refreshTokens(refreshToken, refreshUrl = "https://cyberearn-staging.up.railway.app/api/v1/auth/refresh") {
  try {
    const response = await fetch(refreshUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }

    const data = await response.json();

    const newAccessToken = data.data.token;

    // Retrieve the stored userInfo and update the accessToken
    let stored = JSON.parse(localStorage.getItem("userInfo"));
    if (stored) {
      stored.accessToken = newAccessToken;
      localStorage.setItem("userInfo", JSON.stringify(stored)); // Update localStorage with new token
    }

    return newAccessToken;
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error;
  }
}
