document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const animationDuration = 400;

    function switchTab(targetId, clickedButton) {
        const currentActivePane = document.querySelector('.tab-pane.active');
        const targetPane = document.getElementById(targetId);

        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
        if (clickedButton) {
            clickedButton.classList.add('active');
        }

        if (currentActivePane) {
            currentActivePane.classList.remove('active'); 

            setTimeout(() => {
                if (targetPane) {
                    targetPane.classList.add('active');
                }
            }, animationDuration);

        } else {
            if (targetPane) {
                targetPane.classList.add('active');
            }
        }
    }

    const firstPane = document.getElementById('cold-knowledge');
    const firstButton = document.querySelector('.tab-button');

    setTimeout(() => {
        if (firstPane && firstButton) {
            switchTab('cold-knowledge', firstButton);
        }
    }, 10); 


    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-tab'); 
            if (targetId) {
                 switchTab(targetId, this);
            }
        });
    });
});