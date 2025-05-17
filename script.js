const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const heartPath = (t) => {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    return { x, y };
};

class Particle {
    constructor(x, y, size, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
        this.rotation = Math.random() * Math.PI * 2; // เริ่มต้นด้วยมุมสุ่ม
this.rotationSpeed = (Math.random() - 0.5) * 0.01; // หมุนช้าๆ

    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.98;
        this.rotation += this.rotationSpeed;

    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.scale(this.size / 4, this.size / 4); // หัวใจดูใหญ่ขึ้น (ลดตัวหาร)
        drawHeartShape(ctx, this.color);
        ctx.restore();
    }
}

function drawHeartShape(ctx, color) {
    ctx.beginPath();
    ctx.moveTo(0, -5);
    ctx.bezierCurveTo(5, -15, 15, -5, 0, 10);
    ctx.bezierCurveTo(-15, -5, -5, -15, 0, -5);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.shadowColor = this.color;
ctx.shadowBlur = 10;

}

function createHeartParticles() {
    for (let i = 0; i < 5; i++) {
        const t = Math.random() * Math.PI * 2;
        const { x, y } = heartPath(t);
        const particleX = canvas.width / 2 + x * 15;
        const particleY = canvas.height / 2 - y * 15;
        const size = Math.random() * 6 + 4; // 
        const color = `hsl(${Math.random() * 30 + 330}, 100%, 70%)`;
        const speedX = (Math.random() - 0.5) * 0.5;
        const speedY = (Math.random() - 0.5) * 0.5;
        particles.push(new Particle(particleX, particleY, size, color, speedX, speedY));
    }
}

function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size < 0.5) {
            particles.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createHeartParticles();
    handleParticles();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
function createBokehHearts(amount = 400) {
    const container = document.querySelector(".bokeh-container");

    for (let i = 0; i < amount; i++) {
        const heart = document.createElement("div");
        heart.classList.add("bokeh-heart");

        const size = Math.random() * 25 + 10; // ขนาด 10px - 35px
        const duration = Math.random() * 10 + 5; // 5s - 15s
        const delay = Math.random() * 1; // delay ก่อนเริ่ม

        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.background = `hsl(${Math.random() * 30 + 330}, 80%, 50%)`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${delay}s`;
        heart.style.opacity = Math.random() * 0.4 + 0.2; // ความโปร่งใส 0.2 - 0.6
        heart.style.transform = `rotate(${Math.random() * 360}deg)`;

        container.appendChild(heart);
    }
}

createBokehHearts();

function goToReadyPage() {
    document.getElementById('introPage').classList.remove('active');
    document.getElementById('readyPage').classList.add('active');
  }
  
  function goToLovePage() {
    document.getElementById('readyPage').classList.remove('active');
    document.getElementById('lovePage').classList.add('active');
  }
  
  function enlargeButton() {
    let button = document.querySelector(".ready-btn");
    button.style.transform = "scale(1.5)";
    button.style.transition = "transform 0.3s ease";
  
    setTimeout(() => {
      goToLovePage(); // ไปหน้าขอเป็นแฟน
    }, 300); // รอ 0.3 วิ แล้วไปหน้าใหม่
  }
  
  function notReady() {
    alert("ไม่เป็นไรน้าาๆ รอค่อยพร้อมก็ได้ 🥺");
  }
  
  
  function yes() {
    document.getElementById('lovePage').classList.remove('active');
    document.getElementById('celebratePage').classList.add('active');
  
    document.body.style.background = 'linear-gradient(135deg, #ffc0cb, #ffe4e1)'; // พื้นหลังหวานๆ
  
    startBackgroundHearts();
    startFireworks();
  }
  
  function no() {
    alert("แงงงง ทำไมอ่าา 😢");
  }
  
  function moveButton() {
    const button = document.querySelector('.no');
    button.style.top = Math.random() * window.innerHeight + 'px';
    button.style.left = Math.random() * window.innerWidth + 'px';
    button.style.position = 'absolute';
    }
  
  function startFireworks() {
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.zIndex = "-1"; // ใส่ไว้ใต้ตัวหนังสือ
  
    let hearts = [];
  
    function createHeart(x, y) {
      for (let i = 0; i < 20; i++) {
        hearts.push({
          x: x,
          y: y,
          size: Math.random() * 10 + 5,
          speedX: (Math.random() - 0.5) * 4,
          speedY: (Math.random() - 0.5) * 4,
          alpha: 1
        });
      }
    }
  
    function drawHeart(x, y, size, alpha) {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(size / 50, size / 50);
      ctx.beginPath();
      ctx.moveTo(25, 15);
      ctx.bezierCurveTo(25, 5, 40, 0, 50, 10);
      ctx.bezierCurveTo(60, 0, 75, 5, 75, 15);
      ctx.bezierCurveTo(75, 30, 50, 45, 25, 60);
      ctx.bezierCurveTo(0, 45, -25, 30, -25, 15);
      ctx.bezierCurveTo(-25, 5, -10, 0, 0, 10);
      ctx.bezierCurveTo(10, 0, 25, 5, 25, 15);
      ctx.closePath();
      ctx.fillStyle = `rgba(255,105,180,${alpha})`; // สีชมพูสด
      ctx.fill();
      ctx.restore();
    }
  
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      hearts.forEach((h, index) => {
        h.x += h.speedX;
        h.y += h.speedY;
        h.alpha -= 0.01;
        if (h.alpha <= 0) {
          hearts.splice(index, 1);
        }
      });
  
      hearts.forEach(h => {
        drawHeart(h.x, h.y, h.size, h.alpha);
      });
  
      requestAnimationFrame(animate);
    }
  
    canvas.addEventListener('click', (e) => {
      createHeart(e.clientX, e.clientY);
    });
  
    setInterval(() => {
      createHeart(Math.random() * canvas.width, Math.random() * canvas.height);
    }, 600);
  
    animate();
  }
  function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      if (page.id === pageId) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });
  }
  
