/* Header *************************************************************/

@media (max-width: 1222px) {
    header nav {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .hero h2 {
        font-size: 48px
    }
    .hero h1 {
        font-size: 100px;
    }
}

/* About *******************************************/

@media (max-width: 1222px) {
    .about .about-gallery {
        flex-wrap: wrap;
    }
    .about .about-gallery .gallery-item {
        flex-basis: 40%;
    }
}

/* Services *******************************************/

@media (max-width: 1222px) {
    .services .row-items .horizontal-line-grey {
        display: none;
    }
    .services .row-items .item-box {
        flex-basis: 50%;
        justify-content: center;
        margin-bottom: 30px;
    }
    .services .row-items .item-box .box-logo img {
        width: 100%;
    }
    .services .row-items .item-box .box-info {
        width: 80%;
    }
}

/* Devices *******************************************/

@media (max-width: 1222px) {
    .devices {
        padding-bottom: 550px;
    }
    .devices .devices-item {
        bottom: -78px;
        left: 30%;
    }
    .devices .devices-item img {
        width: 85%;
    }
}

/* What we do *****************************************/

@media (max-width: 1222px) {
    .what-we-do .row.container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .what-we-do .row.container .row-photo {
        margin-bottom: 15px;
    }
    .what-we-do .row.container .row-photo img {
        width: 100%;
    }
    .what-we-do .row.container #accordion {
        width: 50%;
    }
}

/* Quotation *****************************************/

@media (max-width: 1222px) {
    .quotation .container {
        padding: 0 40px;
        width: 80%;
        margin-left: 10%;
    }
    .quotation .container .item img {
        padding: 20px;
    }
}

/* Clients ***************************************/

@media (max-width: 1222px) {
    .clients .clients-box .row .box {
        padding: 10px 30px;
    }
}

/* Blog *******************************************/

@media (max-width: 1265px) {
    .blog.container .blog-posts.container {
        flex-wrap: wrap;
    }
    .blog .blog-posts .post {
        margin: 20px 15px;
    }
}

/* Footer *****************************************/

@media (max-width: 1222px) {
    footer .container {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    footer .box-info,
    footer .box-blog,
    footer .box-gallery {
        width: 80%;
        margin-left: 10%;
    }
    footer .box-blog .box {
        justify-content: flex-start;
    }
    footer .box-gallery .photos {
        justify-content: flex-start;
    }
}