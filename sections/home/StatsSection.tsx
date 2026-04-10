"use client";

import { useEffect, useState, useRef } from "react";

function Counter({ target, start }: { target: number; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startVal = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      startVal += increment;

      if (startVal >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startVal));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, target]);

  return <span>{count}</span>;
}

export default function StatsSection() {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="bg-[#020617] text-white py-16 px-6 md:px-16 text-center"
    >
      <h2 className="text-3xl font-bold text-cyan-400 mb-10">
        Our Achievements
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-4xl font-bold text-cyan-400">
            <Counter target={50} start={startCount} />+
          </h3>
          <p className="text-cyan-200 mt-2">Projects</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-cyan-400">
            <Counter target={120} start={startCount} />+
          </h3>
          <p className="text-cyan-200 mt-2">Researchers</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-cyan-400">
            <Counter target={300} start={startCount} />+
          </h3>
          <p className="text-cyan-200 mt-2">Publications</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-cyan-400">
            <Counter target={20} start={startCount} />+
          </h3>
          <p className="text-cyan-200 mt-2">Collaborations</p>
        </div>

      </div>
    </section>
  );
}