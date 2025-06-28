
    const cardsData = [
      {
        title: "Data Engineer",
        img: "../asset/career/1.jpg",
        desc: "A Data Engineer builds data pipelines for large datasets, optimizing systems to ensure reliable data flow using tools like Hadoop and Spark.",
        skills: "Hadoop, Spark, Cloud, SQL, ETL",
        creds: [
          { txt: "IBM Data Engineering", href: "#" }
        ]
      },
      {
        title: "Data Scientist",
        img: "../asset/career/2.jpg",
        desc: "Applies statistical methods, machine learning, and visualization to inform business strategy.",
        skills: "Python, ML, Statistics, Data Viz",
        creds: [
          { txt: "IBM Data Science", href: "#" }
        ]
      },
      {
        title: "Statistician",
        img: "../asset/career/3.jpg",
        desc: "Collects and interprets data to identify trends and patterns across multiple domains.",
        skills: "R, Biostatistics, Epidemiology",
        creds: [
          { txt: "SAS Programmer", href: "#" }
        ]
      },
      {
        title: "Machine Learning Engineer",
        img: "../asset/career/4.jpg",
        desc: "Builds and optimizes algorithms that enable computers to learn from data.",
        skills: "TensorFlow, PyTorch, AI, Research",
        creds: [
          { txt: "Machine Learning AI Agent Developer", href: "#" }
        ]
      },
      {
        title: "Data Architect",
        img: "../asset/career/5.jpg",
        desc: "Designs and oversees data systems ensuring data is secure, scalable, and well-governed.",
        skills: "Data Modeling, Warehousing, Governance",
        creds: [
          { txt: "IBM Data Architecture", href: "#" },
          { txt: "Meta Database Engineer", href: "#" }
        ]
      },
      {
        title: "Data Manager",
        img: "../asset/career/6.jpg",
        desc: "Oversees proper handling, processing, and storage of data to ensure reliability and timeliness.",
        skills: "SQL, Data Quality, BI, Governance",
        creds: [
          { txt: "IBM Data Management", href: "#" },
          { txt: "AI SQL Database Specialist", href: "#" }
        ]
      }
    ];

    // 🔧 renderer
    const $cards = document.getElementById("cards");
    $cards.innerHTML = cardsData.map(c => `
      <div class="relative bg-white border border-gray-700 rounded-xl shadow-sm p-6 flex flex-col" data-aos="fade-down">
        <!-- angled banner image -->
        <img class="banner drop-shadow-md" src="${c.img}" alt="${c.title}">
        
        <h3 class="text-lg font-semibold mt-2 mb-2">${c.title}</h3>
        <p class="text-sm text-gray-600 leading-relaxed mb-3">${c.desc}</p>

        <p class="text-sm font-semibold mb-1">Skills you'll need:</p>
        <p class="text-sm text-gray-700 mb-4">${c.skills}</p>

        <p class="text-sm font-semibold mb-1">Credentials</p>
        <ul class="space-y-1">
          ${c.creds.map(cr => `
            <li>
              <a href="${cr.href}" class="inline-flex items-center gap-1 text-blue-600 text-sm hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M8.93 6.588l-2.29-.287-.82-2.058a.999.999 0 0 0-1.86.69l.83 2.087a1 1 0 0 0 .569.62l2.736.686-1.322 4.155a.999.999 0 1 0 1.934.642l1.285-4.037 2.29.287a1 1 0 0 0 .245-1.973l-2.29-.287.82-2.058a1 1 0 0 0-1.86-.69l-.83 2.086a1 1 0 0 0-.569.621z"/></svg>
                ${cr.txt}
              </a>
            </li>`).join("")}
        </ul>
      </div>
    `).join("");
