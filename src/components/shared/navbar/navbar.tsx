import { component$ } from "@builder.io/qwik";
import styles from "./navbar.module.css";

export default component$(() => {
  return (
    <>
      <div class="container-scroller">

        <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row" >
          <div class="navbar-brand-wrapper d-flex align-items-center">
            <a class="navbar-brand brand-logo" href="../../index.html">
              <img width="100" height="100" src="../../images/logo.svg" alt="logo" class="logo-dark" />
            </a>
            <a class="navbar-brand brand-logo-mini" href="../../index.html">
              <img width="100" height="100" src="../../images/logo-mini.svg"
                alt="logo" />
            </a>
          </div>
          <div class="navbar-menu-wrapper d-flex align-items-center flex-grow-1">
            <h5 class="mb-0 font-weight-medium d-none d-lg-flex">Welcome stallar dashboard!</h5>
            <ul class="navbar-nav navbar-nav-right ml-auto">
              <form class="search-form d-none d-md-block" action="#">
                <i class="icon-magnifier"></i>
                <input type="search" class="form-control" placeholder="Search Here" title="Search here" />
              </form>
              <li class="nav-item dropdown d-none d-xl-inline-flex user-dropdown">
                <a class="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                  <img width="100" height="100" class="img-xs rounded-circle ml-2" src="../../images/faces/face8.jpg" alt="Profile image" /> <span
                    class="font-weight-normal"> admin-ecomerce@gmail.com </span></a>
                <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                  <div class="dropdown-header text-center">
                    <p class="mb-1">Allen Moreno</p>
                    <p class="font-weight-light text-muted mb-0">allenmoreno@gmail.com</p>
                  </div>
                  <a class="dropdown-item" href=""><i class="dropdown-item-icon icon-user text-primary"></i> Mi perfil</a>
                  <a class="dropdown-item" href=""><i class="dropdown-item-icon icon-power text-primary"></i>Salir</a>
                </div>
              </li>
            </ul>
            <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
              data-toggle="offcanvas">
              <span class="icon-menu"></span>
            </button>
          </div>
        </nav>
      </div>
    </>
  )
});
