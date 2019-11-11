class GitHub {
  constructor() {
    this.client_id = "6bc53b4b9a3be7327113";
    this.client_secret = "d4ffd4733a43ef316b2f8aac85650dbbb5f5173e";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    return {
      profileData: profile
    };
  }
}
