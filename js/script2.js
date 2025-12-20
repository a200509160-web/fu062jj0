function toggleDetails(btn) {
    const card = btn.closest(".card");

    card.classList.toggle("expanded");

  
    if (card.classList.contains("expanded")) {
        btn.textContent = "收合";
    } else {
        btn.textContent = "查看詳情";
    }
}
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const img = card.querySelector('.olla');

    card.addEventListener('mouseenter', () => {
        img.src = img.dataset.gif;  
    });

    card.addEventListener('mouseleave', () => {
        img.src = img.dataset.static; 
    });
});

cards.forEach(card => {
    const img = card.querySelector('.happy');

    card.addEventListener('mouseenter', () => {
        img.src = img.dataset.gif;  
    });

    card.addEventListener('mouseleave', () => {
        img.src = img.dataset.static; 
    });
});
cards.forEach(card => {
    const img = card.querySelector('.huh');

    card.addEventListener('mouseenter', () => {
        img.src = img.dataset.gif;  
    });

    card.addEventListener('mouseleave', () => {
        img.src = img.dataset.static; 
    });
});
cards.forEach(card => {
    const img = card.querySelector('.pop');

    card.addEventListener('mouseenter', () => {
        img.src = img.dataset.gif;  
    });

    card.addEventListener('mouseleave', () => {
        img.src = img.dataset.static; 
    });
});
cards.forEach(card => {
    const img = card.querySelector('.ta');

    card.addEventListener('mouseenter', () => {
        img.src = img.dataset.gif;  
    });

    card.addEventListener('mouseleave', () => {
        img.src = img.dataset.static; 
    });
});
cards.forEach(card => {
    const img = card.querySelector('.sad');

    card.addEventListener('mouseenter', () => {
        img.src = img.dataset.gif;  
    });

    card.addEventListener('mouseleave', () => {
        img.src = img.dataset.static; 
    });
});
cards.forEach(card => {
    const img = card.querySelector('.chi');

    card.addEventListener('mouseenter', () => {
        img.src = img.dataset.gif;  
    });

    card.addEventListener('mouseleave', () => {
        img.src = img.dataset.static; 
    });
});
cards.forEach(card => {
    const img = card.querySelector('.p');

    card.addEventListener('mouseenter', () => {
        img.src = img.dataset.gif;  
    });

    card.addEventListener('mouseleave', () => {
        img.src = img.dataset.static; 
    });
});
cards.forEach(card => {
    const img = card.querySelector('.U');

    card.addEventListener('mouseenter', () => {
        img.src = img.dataset.gif;  
    });

    card.addEventListener('mouseleave', () => {
        img.src = img.dataset.static; 
    });
});
cards.forEach(card => {
    const img = card.querySelector('.sss');

    card.addEventListener('mouseenter', () => {
        img.src = img.dataset.gif;  
    });

    card.addEventListener('mouseleave', () => {
        img.src = img.dataset.static; 
    });
});

cards.forEach(card => {
    const img = card.querySelector('.aaa');

    card.addEventListener('mouseenter', () => {
        img.src = img.dataset.gif;  
    });

    card.addEventListener('mouseleave', () => {
        img.src = img.dataset.static; 
    });
});
document.querySelectorAll('.like').forEach(button => {
  button.addEventListener('click', () => {
    let count = parseInt(button.dataset.count);
    count++;

    button.dataset.count = count;
    button.querySelector('.like-count').textContent = count;

    button.classList.add('liked');
    setTimeout(() => {
      button.classList.remove('liked');
    }, 200);
  });
});
document.querySelectorAll('.like').forEach(button => {
  let count = 0;

  button.addEventListener('click', () => {
    count++;
    button.querySelector('.like-count').textContent = count;

    button.classList.add('liked');
    setTimeout(() => {
      button.classList.remove('liked');
    }, 200);
  });
});

