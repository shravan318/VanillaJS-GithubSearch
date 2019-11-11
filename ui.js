class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
            <div class="md-3">
            <img src="${user.avatar_url}" class="img-fluid mb-2" />
            <a href="${user.html_url}" target="_blank" class="btn btn primary btn-block">View Profile</a>
            </div>
            <div class="md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Repos: ${user.gists}</span>
            <span class="badge badge-success">Public Repos: ${user.followers}</span>
            <span class="badge badge-info">Public Repos: ${user.following}</span>
            <br>
            <br>
            <ul class="list-group>
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
            </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
    `;
  }
}
