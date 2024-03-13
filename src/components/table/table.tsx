import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (<>
        <div class="main-panel">
            <div class="content-wrapper">
                <div class="page-header">
                </div>
                <div class="row">
                    <div class="col-lg-12 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Striped Table</h4>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th> Producto </th>
                                            <th> First name </th>
                                            <th> Estado </th>
                                            <th> Precio </th>
                                            <th> Acciones </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="py-1">
                                                <img src="../../images/faces-clipart/pic-1.png" alt="image" />
                                            </td>
                                            <td> Herman Beck </td>
                                            <td>
                                                <label class="badge badge-success">Completed</label>
                                            </td>
                                            <td> $ 6.990 </td>
                                            <td> May 15, 2015 </td>
                                        </tr>
                                        <tr>
                                            <td class="py-1">
                                                <img src="../../images/faces-clipart/pic-2.png" alt="image" />
                                            </td>
                                            <td> Messsy Adam </td>
                                            <td>
                                                <label class="badge badge-success">Completed</label>
                                            </td>
                                            <td> $ 6.990 </td>
                                            <td>
                                                <button type="button" class="btn btn-primary btn-rounded btn-icon">
                                                    <i class="icon-eye"></i>
                                                </button>
                                                <button type="button" class="btn btn-danger btn-rounded btn-icon">
                                                    <i class="icon-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
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
  </>
  )
});