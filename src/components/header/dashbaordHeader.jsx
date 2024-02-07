import { BrowserView, MobileView } from 'react-device-detect';

export default function DashboardHeader() {

    return (

        <>

            <header className="navbar sticky-top bg-white flex-md-nowrap p-0" data-bs-theme="dark">
                <a className="navbar-brand col-md-3 col-lg-2  me-0 py-0 my-0 px-3 space-between fs-6 text-dark" href="#">

                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 49 49" fill="none">

                        <path fillRule="evenodd" clipRule="evenodd" d="M23.3824 34.15V33.25L23.2824 33.05C23.1824 30.15 23.1824 27.25 23.1824 24.15C23.1824 23.85 23.2824 23.55 23.4824 23.35C23.4824 23.2167 23.5713 23.1722 23.6602 23.1278C23.7046 23.1056 23.7491 23.0833 23.7824 23.05H23.8824C23.8824 22.95 23.9824 22.95 23.9824 22.95H24.4824C25.1824 23.05 25.6824 23.55 25.6824 24.25C25.6824 27.35 25.6824 30.25 25.5824 33.35V34.15L24.5824 35.05H24.2824L23.3824 34.15ZM32.0848 32.6261C32.1173 32.6339 32.1499 32.6419 32.1824 32.65H32.0824L32.0848 32.6261ZM32.8824 24.65L32.0848 32.6261C31.3173 32.4424 30.5499 32.3581 29.7824 32.55C29.8334 31.1743 29.9362 29.7986 30.0381 28.4361C30.1362 27.1245 30.2334 25.8252 30.2824 24.55C30.2824 24.25 30.3824 23.95 30.6824 23.75C30.6824 23.6833 30.7158 23.65 30.7824 23.65C30.8324 23.65 30.8324 23.625 30.8324 23.6C30.8324 23.575 30.8324 23.55 30.8824 23.55L31.5824 23.25H31.6824C31.9824 23.25 32.3824 23.45 32.5824 23.75C32.7824 24.05 32.8824 24.35 32.8824 24.65ZM35.2824 33.75L33.0824 32.75L33.8824 24.55C33.9001 24.4969 33.9147 24.4469 33.9284 24.4C33.9918 24.1823 34.0356 24.0323 34.2824 23.95H34.3824L34.6824 23.65H35.3824C35.6824 23.65 36.0824 23.85 36.2824 24.15C36.4824 24.45 36.5824 24.75 36.5824 25.05L35.3824 33.95V33.65L35.2824 33.75ZM15.8824 32.35L15.8407 32.3639L15.0824 25.35C14.9824 24.75 14.3824 24.35 13.6824 24.35H12.8824C12.8824 24.45 12.7824 24.45 12.7824 24.45C12.4824 24.75 12.4824 25.05 12.4824 25.35C12.6324 26.65 12.8074 27.95 12.9824 29.25C13.1574 30.55 13.3324 31.85 13.4824 33.15L15.8407 32.3639L15.8824 32.75V32.35ZM28.8824 32.65C27.9824 32.85 27.1824 33.15 26.4824 33.65V33.35C26.5167 32.3552 26.5393 31.337 26.5621 30.3032V30.3031C26.606 28.3232 26.651 26.2866 26.7824 24.25C26.7824 23.95 26.8824 23.75 27.0824 23.45H27.4824C27.4824 23.45 27.4824 23.35 27.5824 23.35H27.8824C27.8824 23.35 27.8824 23.25 27.9824 23.25H28.0824C28.7824 23.25 29.3824 23.85 29.3824 24.55C29.0824 27.35 28.9824 30.05 28.8824 32.85V32.65ZM22.4824 33.55L22.4619 33.5406C22.3448 31.7132 22.3026 29.8491 22.2607 27.9979L22.2607 27.9978V27.9978C22.2383 27.009 22.216 26.0239 22.1824 25.05C22.1824 24.7186 22.0452 24.5245 21.8844 24.2971C21.8511 24.25 21.8167 24.2015 21.7824 24.15C21.5824 23.85 21.1824 23.85 20.8824 23.85H19.9824C19.6824 24.05 19.5824 24.45 19.5824 24.75C19.6324 26.05 19.7324 27.325 19.8324 28.6L19.8324 28.6L19.8324 28.6C19.9324 29.875 20.0324 31.15 20.0824 32.45L22.4619 33.5406C22.4685 33.6438 22.4753 33.747 22.4824 33.85V33.55ZM16.7824 32.25H18.9824L18.9824 32.25C18.7824 29.75 18.5824 27.25 18.4824 24.85C18.4824 24.55 18.2824 24.25 17.9824 24.05C17.6824 23.85 17.2824 23.85 16.9824 23.85H16.8824C16.7824 23.85 16.7824 23.95 16.7824 23.95H16.6824C16.5824 23.95 16.5824 24.05 16.5824 24.05H16.4824C16.4824 24.15 16.3824 24.15 16.3824 24.15H16.2824C16.0824 24.45 15.9824 24.65 15.9824 24.95L16.7824 32.25Z" fill="black" />
                        <path d="M38.8824 36.05C38.1824 35.45 37.3824 34.85 36.4824 34.35C36.8824 31.35 37.2824 28.45 37.7824 25.45C37.7824 24.35 36.9824 23.35 35.8824 23.25C35.1824 23.15 34.4824 23.45 34.0824 23.95C33.6824 23.35 33.0824 22.95 32.2824 22.95C31.5824 22.95 30.9824 23.15 30.4824 23.65C30.0824 23.05 29.3824 22.75 28.6824 22.75C27.9824 22.75 27.3824 23.05 26.8824 23.65C26.4824 23.15 25.8824 22.85 25.2824 22.75C24.5824 22.75 23.9824 23.25 23.4824 23.75C23.0824 23.15 22.3824 22.85 21.6824 23.05C20.9824 23.05 20.2824 23.45 19.8824 24.05C19.4824 23.55 18.7824 23.25 18.0824 23.35C17.3824 23.35 16.7824 23.75 16.4824 24.35C15.9824 23.95 15.2824 23.75 14.5824 23.85C13.4824 23.95 12.7824 24.85 12.7824 25.95L13.8824 33.75L11.3824 35.15H11.2824C11.2824 34.95 11.1824 34.65 11.1824 34.25C10.7824 32.05 10.3824 29.65 10.0824 27.55V26.85V26.45C11.7824 25.25 12.7824 23.35 12.9824 21.25H13.1824L15.5824 20.05C16.1824 20.45 16.8824 20.75 17.5824 20.95C19.3824 21.55 21.2824 21.45 23.0824 20.85C24.1824 20.45 25.2824 19.85 26.1824 19.15C26.4824 19.35 26.7824 19.55 27.1824 19.65C28.7824 20.15 30.5824 20.05 32.1824 19.55L33.0824 19.15C35.1824 21.25 38.1824 22.05 41.0824 21.25C41.0824 21.55 40.9824 21.85 40.9824 22.15H40.8824C40.2824 26.55 39.4824 31.65 38.8824 35.75C38.7824 35.95 38.6824 36.05 38.4824 36.25L38.8824 36.05Z" fill="black" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M44.0824 10.95C42.9824 7.65 39.3824 5.75 35.9824 6.55C36.1824 5.65 35.9824 4.75 35.7824 3.95C35.1824 2.35 33.8824 1.15 32.3824 0.45C30.7824 -0.15 29.0824 -0.15 27.4824 0.45C26.3824 0.85 25.3824 1.45 24.5824 2.25C22.5824 1.25 20.3824 1.15 18.2824 1.85C15.7824 2.65 13.7824 4.65 13.0824 7.15C11.5824 6.75 9.98244 6.75 8.58244 7.25C4.98244 8.25 2.98244 11.95 3.98244 15.55C1.18244 16.85 -0.11756 19.75 0.78244 22.45C1.28244 23.85 2.38244 24.95 3.78244 25.55C5.18244 26.15 6.68244 26.15 8.08244 25.55C10.4824 24.75 12.0824 22.45 11.9824 19.95L12.7824 19.75C13.6824 19.45 14.4824 18.95 15.1824 18.35C17.1824 19.85 19.8824 20.25 22.1824 19.25C23.2824 18.95 24.3824 18.35 25.1824 17.45C26.8824 18.45 28.9824 18.65 30.8824 17.95L32.0824 17.45C33.9824 19.65 36.9824 20.45 39.6824 19.55C41.4824 18.95 42.8824 17.75 43.7824 16.05C44.5824 14.45 44.7824 12.45 44.1824 10.75V10.75L44.0824 10.95Z" stroke="black" />
                        <path d="M39.9824 17.65C38.0824 19.05 35.4824 18.75 33.8824 17.05C33.7824 16.95 33.6824 16.65 33.7824 16.55H33.8824C33.9824 16.35 34.0824 16.35 34.3824 16.45C36.7824 18.75 38.7824 17.65 39.4824 17.15C40.1824 16.65 41.9824 13.75 41.2824 12.25C40.5824 10.75 41.2824 11.85 41.3824 11.75C41.4824 11.65 41.7824 11.75 41.8824 11.85C42.6824 13.95 41.8824 16.35 39.9824 17.55V17.65Z" fill="black" />
                        <path d="M33.8824 8.85C33.7824 8.95 33.6824 9.05 33.4824 8.95H33.3824C33.2824 8.95 33.1824 8.75 33.2824 8.45C34.2824 6.75 33.8824 4.55 32.2824 3.35C30.5824 2.15 28.3824 2.05 27.1824 3.25C26.9824 3.35 26.7824 3.35 26.5824 3.25C26.4824 3.25 26.3824 3.05 26.3824 2.95C26.3824 2.85 26.5824 2.75 26.6824 2.75C28.0824 1.35 30.6824 1.45 32.6824 2.85C34.5824 4.25 35.0824 6.45 33.8824 8.75V8.85Z" fill="black" />
                        <path d="M22.1825 17.05C21.5825 17.85 20.0825 18.95 17.2825 18.15H16.8825C16.6825 18.15 16.6825 17.95 16.6825 17.75C16.6825 17.75 16.6825 17.55 16.8825 17.55C17.0825 17.55 17.0825 17.55 17.1825 17.55C17.3825 17.65 20.6825 17.95 21.6825 16.75C22.6825 15.75 22.8825 14.25 22.2825 12.95C21.6825 11.75 20.3825 10.95 19.0825 11.05C18.8825 11.05 18.6825 10.95 18.6825 10.85C18.6825 10.75 18.6825 10.65 18.7825 10.55C18.7825 10.55 18.9825 10.45 19.0825 10.45C20.6825 10.25 22.1825 11.15 22.8825 12.55C23.5825 14.05 23.2825 15.85 22.1825 17.15V17.05Z" fill="black" />
                        <path d="M8.3825 24.05H8.2825C7.0825 24.85 5.5825 24.65 4.5825 23.65C3.3825 22.35 2.9825 20.55 3.4825 18.95C3.9825 17.45 5.4825 16.45 7.0825 16.45C7.2825 16.45 7.4825 16.65 7.4825 16.85C7.4825 17.05 7.3825 17.05 7.0825 17.05C5.6825 17.05 4.4825 17.95 4.0825 19.15C3.5825 20.55 3.8825 22.05 4.8825 23.15C5.7825 23.85 6.9825 23.95 7.9825 23.35C8.0825 23.35 8.3825 23.35 8.3825 23.55C8.3825 23.55 8.3825 23.65 8.3825 23.75C8.3825 23.85 8.3825 23.85 8.3825 23.95V24.05Z" fill="black" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M43.1825 37.75C42.7825 38.35 43.5825 40.15 44.8825 39.45C43.7825 38.95 44.6825 37.45 45.8825 38.35C46.5825 38.95 46.7825 39.95 46.3825 40.75C45.9825 41.55 45.0825 41.95 44.1825 41.65C39.6825 40.75 33.4825 29.15 25.7825 37.55C19.6825 28.95 11.7825 39.15 7.08247 40.15C4.68247 40.65 4.28247 37.45 5.58247 36.65C6.88247 35.95 7.68247 37.55 6.58247 37.85C7.88247 38.55 8.68248 36.95 8.38247 36.25C6.78247 31.85 -1.21753 38.95 4.48247 43.85C10.1825 48.75 19.5825 50.75 25.2825 42.25C32.1825 50.95 43.1825 46.85 45.2825 45.35C52.5825 39.85 45.0825 33.35 43.0825 37.75H43.1825Z" fill="#FFB800" stroke="black" strokeWidth="0.5" />



                    </svg> */}
                    <img src="/public/Logo.svg" />
                    <span>
                        <span className="double px-2">SwiftDrop<span className="dot"></span> </span>

                    </span>

                </a>

                

                <div className="clearfix space-flex">
                    
                    <span className="float-end me-2">

                        <div id="dashboard-nav-flex">
                            

                            <BrowserView>
                                <div className="input-group input-flex">
                                    <input className="form-control bg-white border text-dark rounded-pill py-2" type="text" placeholder="search" id="example-search-input" />
                                    <span className="input-group-append">
                                        <button className="btn  ms-n5" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM22.314 20.899L19.485 18.071L18.071 19.485L20.899 22.314L22.314 20.899Z" fill="black" />
                                            </svg>
                                        </button>
                                    </span>
                                </div>
                            </BrowserView>


                            <span className='text-dark cursor'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 20" fill="white">
                                    <path d="M6 15V16C6 16.7956 6.31607 17.5587 6.87868 18.1213C7.44129 18.6839 8.20435 19 9 19C9.79565 19 10.5587 18.6839 11.1213 18.1213C11.6839 17.5587 12 16.7956 12 16V15M7 3C7 2.46957 7.21071 1.96086 7.58579 1.58579C7.96086 1.21071 8.46957 1 9 1C9.53043 1 10.0391 1.21071 10.4142 1.58579C10.7893 1.96086 11 2.46957 11 3C12.1484 3.54303 13.1274 4.38833 13.832 5.4453C14.5367 6.50227 14.9404 7.73107 15 9V12C15.0753 12.6217 15.2954 13.2171 15.6428 13.7381C15.9902 14.2592 16.4551 14.6914 17 15H1C1.54494 14.6914 2.00981 14.2592 2.35719 13.7381C2.70457 13.2171 2.92474 12.6217 3 12V9C3.05956 7.73107 3.4633 6.50227 4.16795 5.4453C4.8726 4.38833 5.85159 3.54303 7 3Z" stroke="#3D3D3D" strokeWidth="1.38462" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>

                            <span style={{}}>
                                <img id="dashboard-user-profile-chip" src="/profile.png" />
                            </span>

                            <MobileView>
                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                                    {/* <span class="navbar-toggler-icon"></span> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM21 18H3V20H21V18Z" fill="black" />
                                    </svg>
                                </button>
                            </MobileView>
                        </div>
                    </span>
                </div>



                <div id="navbarSearch" className="navbar-search w-100 collapse">
                    <input className="form-control w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
                </div>
            </header>

        </>

    )

}