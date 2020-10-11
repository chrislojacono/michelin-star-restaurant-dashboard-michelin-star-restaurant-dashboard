// TODO: call the logout function at the bottom of the navbar function and pass the current user name to the welcome li

const navbar = () => {
  $('#nav').html(`
  <nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#">Le Baguette</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item mx-3"  id="menuLink">
      <a class="nav-link" id="menuLink" href="#">Menu</a>
    </li>
    <li class="nav-item mx-3" id="reservationLink">
      <a class="nav-link" id="reservationLink" href="#">Reservation</a>
    </li>
    <li class="nav-item mx-3" id="staffLink">
      <a class="nav-link" id="staffLink" href="#">Staff</a>
    </li>
  </ul>

      <ul class="navbar-nav ml-auto">
        <li class="user-info-nav">
          Welcome!
        </li>
        <li class="nav-item">
          <a class="userLinkLogin" href="#"><i class="fa fa-user" id="userLink" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
  </nav>
  `);
};

export default { navbar };
