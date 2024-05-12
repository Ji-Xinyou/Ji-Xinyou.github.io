function about() {
    createText("Hi, I am Xinyou (Jerry) Ji.");
    createText(
        '(On May 12th, 2024) I am currently a student of MSCS at Carnegie Mellon. Before this, I received my bachelor degree in CS from Shanghai Jiao Tong University. \
I am not really a guy who has done a lot of research, but in general I love building computer systems, including OS, Compilers and Distributed Softwares. \
Outside of all these "boring" work stuff, I do play basketball a ton and I really love gaming.'
    );
    createText(
        "(p.s. I used to be a faceit level 10 player in CS:GO and a diamond in League.)"
    );
}

function projects() {
    createText(
        "<a href='https://github.com/Ji-Xinyou' target='_blank'><i class='fab fa-github black'></i> github.com/Ji-Xinyou</a>"
    );
    createText(
        '<a href="projects/c0c" target="_blank"><i class="fas fa-cogs black"></i> A fully end-to-end compiler for C0 lanaguage.</a>'
    );
    createText(
        '<a href="https://github.com/Ji-Xinyou/panoramic" target="_blank"><i class="fas fa-cogs black"></i> A panoramic image stitching pipeline with multiple backends(MPI, CUDA, MPI, OpenCV).</a>'
    );
    createText(
        '<a href="https://github.com/Ji-Xinyou/spark-sched" target="_blank"><i class="fas fa-cogs black"></i> A dummy scheduler for Spark workload in asymmetric network bandwidth clusters.</a>'
    );
}

function sn() {
    createText(
        "<a href='https://github.com/Ji-Xinyou' target='_blank'><i class='fab fa-github black'></i> github.com/Ji-Xinyou</a>"
    );
    createText(
        "<a href='https://www.linkedin.com/in/jijerryji/'target='_blank'><i class='fab fa-linkedin-in black'></i> linkedin.com/in/jijerryji/</a>"
    );
    createText(
        "<a href='https://twitter.com/jxyintheflesh' target='_blank'><i class='fab fa-twitter black'></i> twitter.com/jxyintheflesh</a>"
    );
}

function clear() {
    document.querySelectorAll("p").forEach((e) => e.parentNode.removeChild(e));
    document
        .querySelectorAll("section")
        .forEach((e) => e.parentNode.removeChild(e));
}
