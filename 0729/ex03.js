
        let mouse_x = 0;
        let mouse_y = 0;
        let ball_x = 0;
        let ball_y = 0;
        let vel_x = 0;
        let vel_y = 0;
        const docStyle = document.documentElement.style;
        const strength = 0.1;
        const drag = 0.8;

        document.addEventListener("mousemove", e => {
           // console.log(e.clientX + ":" + e.clientY);
            mouse_x = e.clientX;
            mouse_y = e.clientY;

        });

        function delaymotion() {
         
            let distance_x = mouse_x - ball_x;
            distance_x *= strength;
            vel_x *= drag;
            vel_x += distance_x;
            ball_x += vel_x;

            let distance_y = mouse_y - ball_y;
            distance_y *= strength;
            vel_y *= drag;
            vel_y += distance_y;
            ball_y += vel_y;

            docStyle.setProperty("--mouse-x", ball_x);
            docStyle.setProperty("--mouse-y", ball_y);
            docStyle.setProperty("--scale", (vel_x + vel_y) * strength);
            requestAnimationFrame(delaymotion);
        }
        delaymotion();