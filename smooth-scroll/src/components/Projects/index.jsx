import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "MNIST Model Experiment System",
        src: "mnist.png"
    },
    {
        title: "OCR Scan for Lottery Ticket",
        src: "lottery.png"
    },
    {
        title: "Live Camera Re-identification",
        src: "miscani_lake.jpeg"
    },
    {
        title: "AIELTS - IELTS Testing App",
        src: "AIELTS.png"
    },
    {
        title: "VuaStyle - Clothing Embedded Clusteing",
        src: "vuastyle.png"
    },
]

export default function Index() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>Down here are some of my previous projects and a small demo of them. The projects vary from Computer Vision, Generative AI, LLMs and edge computing.</p>
                </div>
                <div className={styles.column}>
                    <p>These projects are completed during my internship, some are my personal projects and some are the projects that me and my team created during hackathons.</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onClick={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
