import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('sistema-presentacion');

  integrantes = [
    {
      nombre: 'Luis Alfredo Huamán Puente',
      rol: 'Senior Data Scientist',
      especialidad: 'Data Science, Machine Learning e Inteligencia Artificial',
      correo: 'luis.huaman.p@uni.pe',
      descripcion: `Ingeniero Estadístico y candidato a Magíster en Inteligencia Artificial 
      por la UNMSM. Cuento con más de 10 años de experiencia desarrollando soluciones 
      analíticas, modelos predictivos y automatización de procesos en sectores salud, 
      educación y contact center. He liderado proyectos de Machine Learning, 
      analítica avanzada y soluciones Cloud (AWS), 
      transformando datos en decisiones estratégicas para la optimización de recursos y
       mejora de indicadores de negocio.`,
      foto: 'img/alfredo.jpeg'
    },
    {
      nombre: 'Hector Javier Quenaya Limachi',
      rol: 'Experto en Gestión de Operaciones',
      especialidad: 'Gestión de Procesos Mineros e Industriales',
      correo: 'hector.quenaya@unmsm.edu.pe',
      descripcion: `
      Experiencia en gestión de procesos mineros y gestión de procesos industriales
      manufacturados, manejo de KPI, gestión de operaciones en general; 
      Ingeniero Geólogo por la Universidad Nacional del Altiplano e Ingeniero Civil por 
      la Universidad Privada de Moquegua. Durante más de 25 años he desarrollado mi carrera
      en empresas como Cemento Sur S.A., Cal & Cemento Sur S.A.,
      Cerámica San Lorenzo S.A.C., Corporación Aceros Arequipa y MINSUR S.A., 
      ocupando cargos como Jefe de Planta de Cal, Jefe de Materias Primas,
      Geólogo de Campo y Supervisor de Obra`,
      foto: 'img/hector.jpeg'
    },
    {
      nombre: 'Wilbert David Vilchez Vargas',
      rol: 'Asesoría a los operadores de comercio exterior',
      especialidad: 'Gestión de Aduanas y Comercio Exterior',
      correo: 'wilbert.vilchezv@unmsm.edu.pe',
      descripcion: `Economista, MBA en Gerencia de Sistemas Logísticos,
      Especialista en Aduana, Asesoría en Comercio Exterior, 
      Analista de Planeamiento, jefe de Logística, jefe de Transporte,
      Especialista en Fletamentos, Experiencia laboral en SUNAT ADUANA, 
      Sector Metal mecánico SIMA PERÚ S.A., Sector Minero MINPECO S.A, 
      Sector Eléctrico - Electro Oriente S.A., Sector Servicios, 
      Editora Perú S.A., 
      Sector Agricultura INRENA S:A, PNUD Proyecto Poder Judicial`,
      foto: 'img/wilbert.jpeg'
    },

    {
      nombre: 'Eugenio Felix Alvarado Espichan',
      rol: 'Integrante',
      especialidad: 'Inteligencia Artificial',
      correo: 'eugenio@email.com',
      descripcion: `Project Manager y Consultor SAP con más de 20 años de
      experiencia liderando soluciones Back Office SAP a gran escala y de
      migración a S/4HANA en los sectores retail, agroindustrial,
      logística, servicios y de salud pública. Sólida trayectoria 
      liderando equipos multifuncionales, optimizando procesos financieros,
      comerciales y logísticos e impulsando iniciativas de 
      transformación digital. Experiencia en SAP FI, AP, AR, SD, MM,
      CO, POWER BI, Cloud ALM, y Programación ABAP. Experiencia 
      en integración tecnológica, automatización y analítica de datos.
      Scrum Máster (SMC 939102), Bachiller en ingeniería Industrial, 
      Diplomado en gestión de proyectos bajo enfoque PMI, 
      con Dominio del inglés y abierto a oportunidades y mejoras.`,
      foto: 'img/felix.jpeg'
    },


    {
      nombre: 'Wilson Castañeda Ayay',
      rol: 'Integrante',
      especialidad: 'Inteligencia Artificial',
      correo: 'wilson@email.com',
      descripcion: 'Interesado en aplicaciones empresariales de IA.',
      foto: 'img/imagen4.jpg'
    }
  ];

}