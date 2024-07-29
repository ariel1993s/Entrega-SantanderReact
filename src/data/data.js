const productos = [
    // Categoría: Remeras
    {
        id: 1,
        nombre: "Manga Corta Básica",
        descripcion: "Remera de algodón, color blanco.",
        precio: 100,
        categoria: "remeras",
        stock: 10,
        imagen: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlwMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQIFAwQGB//EAD8QAAICAQICBgUHCgcAAAAAAAABAgMRBAUhMQYSQVFhcRMiMpGxIzNCYnKBoRU1Y3OCg5KiwdEUJTQ2RVLh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP3EAAAAAAKTsjDm/uAuUnZGtZk/u7ThPUSfCK6pxXtNvm+0D1w1NUvpY8+B0Uovk17zNlGeXhxa8Y5IUJP6MP4QNKVkI+1JLzZyeqpTx1s+KPH1WnwhH3F4p49bsA98Wmsp5RJnKcoSzB4PTXqc8LFjxQHoICkpcU0yQAAAgkAAAABWyarg5S5IlvCbZ4bZu6f1VyQF5XTs+qvAp1S0EXwBzwOqWwSgKpNF8ruIwQBLfgc5JnRlQKYHVLdpIFMuPFZO1eqSmoW8G+CkUZw1EVOOGBqA8uhvdtbjN/KQ4S8fE9QAAAADnfZ6OGe18kBy1U8/JxfPmcYrCfgxBZeWWXFyXbkCU8SLM5WPq8fEspZAuQQiUBIIyGwJIYyGBUglnOUsAXckkUlxaKRfXlxfBF13gcHY9PfG76KXr+Mf/OZrxeVlGZJevyzw5HfbbfUlRJ5dfLPbHs/t9wHtBAAlmfZdXbrZUOyPpYLhXnjjvwaB49ft2l18EtRD1o8Y2RfVlF96a4oBGOCJPHE8EvyltvtxluGkX0opK6C+EvwfmeTc+kWg0+gs1NdqsnH1VQuFkpvlHqvimwO26bnptJOiF90a5XWqFcM8ZyfYke2qeVxMbYNgv1Ftm8b7GMtddDFVWPV08OaivHxNChvqrPMD3phs5weTolkCMjJPVDiBCZOSVEhgGee6WIs6z5HjueOL7OIHj27cNPfrNTRXbm2mfVsg37PD4cTXi8mH0Z2uncNk/wAZNdW++6d1dy4SjlvHHuwel7ppdBGa3TV06aVfCXpZKOfLv+4DUccy5Hj1uu0+236aeoujC22xVwr7bE+aS8OeTJ/Le57zL0PRrRuurlLX6yDjH9iHN+b9zNLZui2n0Ooeu11s9duEva1F76zXhHuXggPoE8pMEgAAAB5Ltt0V98L7tLTO6DzGbgso9YAGNKOL7Irkpv4myZM1nUWfbYHWvkdEc4HRAX4AgASVZJVgc7DK3iTr23WTjzjRNr+FmrMyN7Wds1i/Qz+DA2diojptm0dMVhRqivwOuq27R6ycJ6rTVWyh7LnFNonbv9Bp/wBXH4HpArCEa4qMIqMVySXAsAAAAAAAAAAMuSXpJPvbZqMyU8zfmB1jwOkSiLxAsiSoAkpIsc3zAhmXuceto9THvqmvwZqPkeLVLrQsXfFgaOzS621aSXfTH4HtMvozLrbBt7/QR+BqAAAAAAAAAAAAMeHtGw+RkwWJMDtEujnFl0BYEEgQyj5l2UAiXI8tvb5Hpk+BwsXEC3RP/bm3/qYmuZHRTh0e0K7q0jXAAAAAAAAAAACJeyzKT4Z7zUnwhLyMpcl5AdEXRSJdAXyQyEAJfIoyxVgVZzlzLtlHyfigHRT8xaZd3WX4s1zH6KfmeC7rLF/MzYAAAAAAAAAAAClzxTN90WZa7PI1Lk3TNJZzFny76QbVRbKnV6mVFkXhxtpnHD88Y/EDXLxM6ne9mu+b3TRv99FfE9teo0ti+S1NMvs2Rf8AUDsC0YdZZjx8h6KXc/cBVlWdPRvufuOVsq6Vm62EEu2clH4gVZSb7Dyaje9m0/z26aOP7+P9zP1HSrY4p+j1jvl2RopnNv3LAGx0Tf8Alc1/11Fq/nZtGH0Qjb+SXZdVOp3XTsjCftJSk2sm4AAAAAAAAAAAA5zqrnwnCMvNAAeW3aduv+d0VEvOCPFd0S2C75za9O/2QAPLLoL0Zf8AxNCfgsELoPsC9jRuH2bJL+pIAh9CNjkvXotku6V82viXo6D9G6XmG1UZXa1kADRo2LatP8zoKI4+oeyGmoqx6OmEfKKAA7AAAAAAAA//2Q==",
    },
    {
        id: 2,
        nombre: "Manga Larga Casual",
        descripcion: "Remera de algodón, color negro.",
        precio: 200,
        categoria: "remeras",
        stock: 15,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJc2mtBwmRPQa8_Qh1i5p_oO2wQV33z2sJlg&s",
    },
    {
        id: 3,
        nombre: "Manga Corta Estampada",
        descripcion: "Remera de algodón con estampado gráfico.",
        precio: 150,
        categoria: "remeras",
        stock: 20,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKqqQrFI4PgdEbVp9RHBglKGI5ZGC5HybM3A&s",
    },
    
    // Categoría: Buzos
    {
        id: 4,
        nombre: "Buzo con Capucha",
        descripcion: "Buzo de felpa con capucha y bolsillo frontal.",
        precio: 300,
        categoria: "buzos",
        stock: 12,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKs3iPsefdCVg8K4wkw2IS0r-UvNgmss3ISw&s",
    },
    {
        id: 5,
        nombre: "Buzo Sin Capucha",
        descripcion: "Buzo de felpa sin capucha, color gris.",
        precio: 250,
        categoria: "buzos",
        stock: 8,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgZp02YQFd364YvLiNcpi7tRrUo1O28Xg0Q&s",
    },
    {
        id: 6,
        nombre: "Buzo Deportivo",
        descripcion: "Buzo de algodón para actividades deportivas.",
        precio: 280,
        categoria: "buzos",
        stock: 10,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5w74H7goAbRsd-XlrPim6GeIoq7frinHhhQ&s",
    },
    
    // Categoría: Pantalones
    {
        id: 7,
        nombre: "Jeans Ajustados",
        descripcion: "Jeans ajustados, color azul oscuro.",
        precio: 350,
        categoria: "pantalones",
        stock: 5,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKpdX9IWg6Hm3j6-XV9k1CIp7sP4bVjkzaA&s",
    },
    {
        id: 8,
        nombre: "Pantalones Chinos",
        descripcion: "Pantalones chinos, color beige.",
        precio: 400,
        categoria: "pantalones",
        stock: 7,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOt0YSVssOAcCXIaubN3tOzi4pAt-WgOkDg&s",
    },
    {
        id: 9,
        nombre: "Pantalones Deportivos",
        descripcion: "Pantalones deportivos con cintura elástica.",
        precio: 300,
        categoria: "pantalones",
        stock: 6,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRn6MPcGe_NTYE0E_tFMvSABBvbm_sMiGrnw&s",
    }
    
];

const obtenerProductos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout  (()=>{ 
             resolve (productos)}, )     
    } 
)  }


export default obtenerProductos