import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import Sidebar from '~/components/shared/sidebar/sidebar';

export const useProducts = routeLoader$(async (requestEvent) => {
    // This code runs only on the server, after every navigation
    const res = await fetch(`http://localhost:8000/product/`);
    const products = await res.json();

    return products as Products;
});

export default component$(() => {

    const signal = useProducts();
    console.log(signal.value)
    return <>
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
                    <h5 class="mb-0 font-weight-medium d-none d-lg-flex">admin lite</h5>
                    <ul class="navbar-nav navbar-nav-right ml-auto">
                        <form class="search-form d-none d-md-block" action="#">
                            <i class="icon-magnifier"></i>
                            <input type="search" class="form-control" placeholder="Search Here" title="Search here" />
                        </form>
                        <li class="nav-item dropdown d-none d-xl-inline-flex user-dropdown">
                            <a class="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                                <img width="100" height="100" class="img-xs rounded-circle ml-2" src="../../images/faces/face8.jpg" alt="Profile image" /> <span
                                    class="font-weight-normal"> admin-corregojorquera@gmail.com </span></a>
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
            <div class="container-fluid page-body-wrapper">

                <Sidebar />

                <div class="main-panel">
                    <div class="content-wrapper">
                        <div class="page-header">
                        </div>
                        <div class="row">
                            <div class="col-lg-12 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">Striped Table</h4>
                                        <table class="table  table-hover">
                                            <thead>
                                                <tr>
                                                    <th> Producto </th>
                                                    <th> Nombre </th>
                                                    <th> Estado </th>
                                                    <th> Precio </th>
                                                    <th> Acciones </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    signal.value.map(({ product_name, price, status }) =>

                                                        <tr>
                                                            <td class="py-1">
                                                                <img src="../../images/faces-clipart/pic-1.png" alt="image" />
                                                            </td>
                                                            <td> { product_name } </td>
                                                            <td>
                                                                { status ?
                                                                    <label class="badge badge-success">Activo</label>
                                                                    :
                                                                    <label class="badge badge-danger">Inactivo</label>
                                                                }

                                                            </td>
                                                            <td> $ {price} </td>
                                                            <td>
                                                                <button type="button" class="btn btn-outline-secondary btn-rounded btn-icon">
                                                                    <i class="icon-eye text-info"></i>
                                                                </button>
                                                                <button type="button" class="btn btn-outline-secondary btn-rounded btn-icon">
                                                                    <i class="icon-trash text-danger"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer class="footer">
                        <div class="d-sm-flex justify-content-center justify-content-sm-between">
                            <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com
                                2023</span>
                            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <a
                                href="https://www.bootstrapdash.com/bootstrap-admin-template/" target="_blank">Bootstrap admin
                                templates</a> from Bootstrapdash.com</span>
                        </div>
                    </footer>

                </div>

            </div>
        </div>

    </>
});