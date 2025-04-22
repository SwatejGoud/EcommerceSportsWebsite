let btn = document.querySelector(".button-container");
let features = document.querySelector("#features-container")


btn.addEventListener("click", (e) => {
    features.classList.remove("features-container");
    void features.offsetWidth;
    features.classList.add("features-container");
    switch(e.target.id) {
        case "yoga":
            yoga();
            break;
        case "group":
            group();
            break;
        case "solo":
            solo();
            break;
        case "stretch":
            stretch();
            break;
        default:
            return;    
    }
});

function yoga() {
    document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Choose Yoga?";
    document.querySelectorAll("#features-container p")[0].innerHTML = `Yoga offers a wide range of benefits for physical and mental well-being, 
              including improved flexibility, strength, and balance, as well as stress reduction and improved mood. It also promotes body awareness, 
              increases concentration, and enhances the mind-body connection. `;
    document.querySelectorAll("#features-container h6")[1].innerHTML = "When comes Yoga Time?";
    document.querySelectorAll("#features-container p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:00am`;
    document.querySelectorAll("#features-container p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:00am`;
    document.querySelectorAll("#features-container p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:00am`;
    document.querySelector("#features-container img").src = "img/yoga.jpg";
}

function group() {
    document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Choose Group?";
    document.querySelectorAll("#features-container p")[0].innerHTML = `Other people influence your attitudes and and emotional responses to exercise.
                That is, they can affect how you feel about exercising, which is critical for determining whether you do it or not.
                If you get to know others who exercise regularly, you start to perceive exercise as more positive, common, desirable and doable.`;
    document.querySelectorAll("#features-container h6")[1].innerHTML = "When comes Group Time?";
    document.querySelectorAll("#features-container p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:00am`;
    document.querySelectorAll("#features-container p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:00am`;
    document.querySelectorAll("#features-container p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:00am`;
    document.querySelector("#features-container img").src = "img/group.webp";
}

function solo() {
    document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Choose Solo?";
    document.querySelectorAll("#features-container p")[0].innerHTML = `Solo gym workouts offer flexibility, focus, and personal control,
                making them a good choice for individuals who value self-discipline,
                independent scheduling, and a personalized fitness journey.
                Working out alone can also be more efficient, as you can minimize distractions and get more done in a shorter time. `;
    document.querySelectorAll("#features-container h6")[1].innerHTML = "When comes Solo Time?";
    document.querySelectorAll("#features-container p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:00am`;
    document.querySelectorAll("#features-container p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:00am`;
    document.querySelectorAll("#features-container p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:00am`;
    document.querySelector("#features-container img").src = "img/solo.jpg";
}

function stretch() {
    document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Choose Stretch?";
    document.querySelectorAll("#features-container p")[0].innerHTML = `Stretching may help you improve your range of motion and decrease your risk of injury,
                among other benefits. Studies about the benefits of stretching have had mixed results.
                Some research shows that stretching doesn't reduce muscle soreness after exercise.
                Other studies show that lengthening the muscle and holding the stretch immediately before a sprint may slightly worsen performance.`;
    document.querySelectorAll("#features-container h6")[1].innerHTML = "When comes Stretch Your Time?";
    document.querySelectorAll("#features-container p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:00am`;
    document.querySelectorAll("#features-container p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:00am`;
    document.querySelectorAll("#features-container p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:00am`;
    document.querySelector("#features-container img").src = "img/stret.webp";
}

let triangle = document.querySelector(".triangle");
let heightInput = document.querySelector("#height");
let weightInput = document.querySelector("#weight");
let bmiValueDisplay = document.querySelector("#bmi-value");

weightInput.addEventListener("input", () => {
  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    bmiValueDisplay.textContent = "Your BMI: --";
    return;
  }

  let bmi = weight / ((height / 100) ** 2);
  let percentage;

  // Display BMI rounded to 2 decimal places
  bmiValueDisplay.textContent = `Your BMI: ${bmi.toFixed(2)}`;

  if (bmi > 13.5 && bmi < 18.5) {
    percentage = 7 + (bmi - 13.5) * 16 / 5;
  } else if (bmi >= 18.5 && bmi < 25) {
    percentage = 23 + (bmi - 18.5) * 16 / 6.5;
  } else if (bmi >= 25 && bmi < 30) {
    percentage = 40 + (bmi - 25) * 16 / 5;
  } else if (bmi >= 30 && bmi < 35) {
    percentage = 56 + (bmi - 30) * 16 / 5;
  } else if (bmi >= 35 && bmi < 40) {
    percentage = 72 + (bmi - 35) * 16 / 5;
  }

  if (percentage > 6 && percentage < 88) {
    triangle.style.left = `${percentage}%`;
  }
});


function changeBg() {
    let navbar = document.querySelector(".navbar-container");
    let scrollValue = window.scrollY;
    if(scrollValue < 700) {
        navbar.classList.remove('bgColor');
    } else {
        navbar.classList.add('bgColor');
    }
}
window.addEventListener('scroll',changeBg);
