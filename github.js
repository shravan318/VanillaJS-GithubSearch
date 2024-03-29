class GitHub {
  constructor() {
    this.client_id = "6bc53b4b9a3be7327113";
    this.client_secret = "d4ffd4733a43ef316b2f8aac85650dbbb5f5173e";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profileData: profile,
      repoData: repos
    };
  }
}
