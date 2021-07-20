const panels = document.querySelectorAll(".panel");
/*Expanding on hover*/
panels.forEach((panel) => {
  panel.addEventListener("mouseover", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

// Displaying the description relavant to the image
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    console.log(panel.className);
    switch (panel.className) {
      case "panel img1 active":
        displayDescription(1);
        break;
      case "panel img2 active":
        displayDescription(2);
        break;
      case "panel img3 active":
        displayDescription(3);
        break;
      case "panel img4 active":
        displayDescription(4);
        break;
      case "panel img5 active":
        displayDescription(5);
        break;
    }
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

/*To display Description*/
function displayDescription(number) {
  console.log(number);
  let img1Description = `
    <div class="item1">
            <img class="image" src="../img/snap/cup.jpg" alt="2018 Fifa cup"  >
    </div>
    <div class="item2">
        <P><h1>The 2018 FIFA World Cup</h1> <br>
            The 2018 FIFA World Cup was an international football tournament contested by men's national teams that took place between 14 June and 15 July 2018 in Russia. It was the 21st FIFA World Cup, a worldwide football tournament held once every four years. It was the eleventh time the championships had been held in Europe, and the first time they were held in Eastern Europe. At an estimated cost of over $14.2 billion, it was the most expensive World Cup to date.[1][2]
            The tournament phase involved 32 teams, of which 31 came through qualifying competitions, while as the host nation Russia qualified automatically. Of the 32, 20 had also appeared in the 2014 event, while both Iceland and Panama made their first appearances at the World Cup. 64 matches were played in 12 venues across 11 cities. Germany, the defending champions, were eliminated in the group stage. Host nation Russia was eliminated in the quarter-finals. In the final, France played Croatia on 15 July at the Luzhniki Stadium in Moscow. France won the match 4–2 to claim their second World Cup.
            Croatian player Luka Modrić was voted the tournament's best player, winning the Golden Ball. England's Harry Kane won the Golden Boot as he scored the most goals during the tournament with six. Thibaut Courtois won the Golden Glove, awarded to the goalkeeper with the most clean sheets. It has been estimated that more than three million people attended games during the tournament.
        </P>
    </div>
  `;

  let img2Description = `
    <div class="item1">
      <img class= "image" src="../img/snap/soccer-488700.jpg" alt="Playing Football" width="650" height="550"  >
    </div>
    <div class="item2">
      <P><h1>Football</h1> <br>
      The English word football may mean any one of several team sports (or the ball used in that respective sport), depending on the national or regional origin and location of the person using the word. So where English is a first language the unqualified use of the word football is used to refer to the most popular code of football in that region. The sports most frequently referred to as simply football are Association football, American football, Australian rules football, Canadian football, Gaelic football, rugby league football and rugby union football.
      </P>
    </div>
  `;

  let img3Description = ` 
  <div class="item1">
  <img class="image" src="../img/snap/pexels-tom-fisk-3448250.jpg" alt="Football Stadium" width="650" height="550" >
  </div>
  <div class="item2">
    <P><h1>Football stadium</h1> <br>
      The pitch is rectangular in shape. The longer sides are called touchlines, and the shorter sides are called the goal lines. The two goal lines must be between 45 and 90 m (50 and 100 yd) wide, and be the same length.[3] The two touchlines must be between 90 and 120 m (100 and 130 yd) long, and be the same length.[3] All lines on the ground must be equally wide, not to exceed 12 cm (5 in).[3] The corners of the pitch are marked by corner flags.[4]
      For international matches the field dimensions are more tightly constrained; the goal lines must be between 64 and 75m wide (70 and 82yds), and the touchlines must be between 100 and 110 m (110 and 120 yd) long.[3]
      Although the term goal line is often taken to mean only that part of the line between the goalposts, in fact it refers to the complete line at either end of the pitch, from one corner flag to the other. In contrast, the term byline (or by-line) is often used to refer to that portion of the goal line outside the goalposts. This term is commonly used in football commentaries and match descriptions, such as this example from a BBC match report: "Udeze gets to the left byline and his looping cross is cleared..."[5]
    </P>
  </div>`;

  let img4Description = `
  <div class="item1">
    <img class="image" src="../img/snap/ronaldo.jpg" alt="Image of Ronaldo" width="650" height="550" >
  </div>  
  <div class="item2">
    <P><h1> Ronaldo</h1> <br>               
      Cristiano Ronaldo dos Santos Aveiro GOIH ComM (Portuguese pronunciation: [kɾiʃˈtjɐnu ʁɔˈnaɫdu]; born 5 February 1985) is a Portuguese professional footballer who plays as a forward for Serie A club Juventus and captains the Portugal national team. Often considered the best player in the world and widely regarded as one of the greatest players of all time, Ronaldo has won five Ballons d'Or[note 3] and four European Golden Shoes, both of which are records for a European player. He has won 32 major trophies in his career, including seven league titles, five UEFA Champions Leagues, one UEFA European Championship, and one UEFA Nations League title. Ronaldo holds the records for the most international goals (109, tied with Ali Daei), the most goals (134) and assists (42) in the Champions League, and the most goals in the European Championship (14). He is one of the few recorded players to have made over 1,100 professional career appearances and has scored over 780 official senior career goals for club and country.
      Born and raised in Madeira, Ronaldo began his senior club career playing for Sporting CP, before signing with Manchester United in 2003, aged 18. After winning the FA Cup in his first season, he helped United win three successive Premier League titles, the Champions League, and the FIFA Club World Cup; at age 23, he won his first Ballon d'Or.  
    </P>
  </div>`;

  let img5Description = `
  <div class="item1">
   <img class="image" src="../img/snap/win.jpg" alt="Fifa Foot Ball cup0" width="650" height="550" >
  </div>
  <div class="item2">
    <P><h1>The 2022 FIFA World Cup</h1> <br>
      The 2022 FIFA World Cup is scheduled to be the 22nd running of the FIFA World Cup competition, the quadrennial international men's football championship contested by the national teams of the member associations of FIFA. It is scheduled to take place in Qatar from 21 November to 18 December 2022. This will be the first World Cup ever to be held in the Arab world. This will be the second World Cup held entirely in Asia after the 2002 tournament in South Korea and Japan. In addition, the tournament will be the last to involve 32 teams, with an increase to 48 teams scheduled for the 2026 tournament in the United States, Mexico, and Canada. The reigning World Cup champions are France. Due to Qatar's intense summer heat, this World Cup will be held from late-November to mid-December, making it the first tournament not to be held in May, June, or July; it is to be played in a reduced timeframe of around 28 days. 
      Accusations of corruption have been made relating to how Qatar won the right to host the event. A FIFA internal investigation and report cleared Qatar of any wrongdoing, but chief investigator Michael J. Garcia has since described FIFA's report on his enquiry as containing "numerous materially incomplete and erroneous representations." On 27 May 2015, Swiss federal prosecutors opened an investigation into corruption and money laundering related to the 2018 and 2022 World Cup bids. On 6 August 2018, former FIFA president Sepp Blatter claimed that Qatar had used black ops, suggesting that the bid committee had cheated to win the hosting rights. Additionally, Qatar has faced strong criticism due to the treatment of foreign workers involved in preparation for the World Cup, with Amnesty International referring to forced labour and stating that hundreds or thousands of migrant workers have died as a result of human rights abuses, and careless and inhumane work conditions, despite worker welfare standards being drafted in 2014. 
    </P>
  </div>`;

  /*To insert the relavant image and description html snippet*/
  switch (number) {
    case 1:
      document.getElementById("showSnap").innerHTML = "";
      document.getElementById("showSnap").innerHTML = img1Description;
      break;
    case 2:
      document.getElementById("showSnap").innerHTML = "";
      document.getElementById("showSnap").innerHTML = img2Description;
      break;
    case 3:
      document.getElementById("showSnap").innerHTML = "";
      document.getElementById("showSnap").innerHTML = img3Description;
      break;
    case 4:
      document.getElementById("showSnap").innerHTML = "";
      document.getElementById("showSnap").innerHTML = img4Description;
      break;
    case 5:
      document.getElementById("showSnap").innerHTML = "";
      document.getElementById("showSnap").innerHTML = img5Description;
      break;
  }
}

/*To set font colour*/
function setFontColour(form) {
  let selectedColor = fontColour[fontColour.selectedIndex].value;
  console.log(selectedColor);
  switch (selectedColor) {
    case "Color#1":
      colorChanger(1, "#ad5921");
      break;
    case "Color#2":
      colorChanger(1, "#3b009d");
      break;
    case "Color#3":
      colorChanger(1, "#000000");
      break;
    case "Color#4":
      colorChanger(1, "#ffffff");
      break;
    case "Color#5":
      colorChanger(1, "#510028");
      break;  
  }
}

/*To set background color*/
function setBackgroundColour(form) {
  let selectedColor = backgroundColour[backgroundColour.selectedIndex].value;
  switch (selectedColor) {
    case "Color#1":
      colorChanger(2, "#163955");
      break;
    case "Color#2":
      colorChanger(2, "#9a2fa3");
      break;
    case "Color#3":
      colorChanger(2, "#a1fffe");
      break;
    case "Color#4":
      colorChanger(2, "#f9ffa1");
      break;
    case "Color#5":
      colorChanger(2, "#ffb7a1");
      break;  
  }
}

// Changes the color according to the selection
function colorChanger(number, color) {
  if (number === 1) {
    let allElements = document.getElementsByClassName("snapPageContainer");
    for (let i = 0; i < allElements.length; i++) {
      allElements[i].style.color = color;
    }
  } else if (number === 2) {
    document.body.style.backgroundColor = color;
  }
}