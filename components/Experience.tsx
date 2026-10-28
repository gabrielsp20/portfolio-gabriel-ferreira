import profile from "../data/profile.json";

export function Experience() {
  return (
    <>
      <section
        className="page-intro container"
        aria-labelledby="titulo-experiencia"
      >
        <p className="eyebrow">Experiência profissional</p>
        <h1 id="titulo-experiencia">
          Uma trajetória próxima de quem usa a tecnologia.
        </h1>
        <p className="lead">
          Da manutenção de dispositivos ao Service Desk corporativo:
          atendimento, diagnóstico e documentação como base do trabalho.
        </p>
        <a
          className="text-link"
          href={profile.resume}
          download="Curriculo-Gabriel-Ferreira.pdf"
        >
          Baixar currículo completo <span aria-hidden="true">↓</span>
        </a>
      </section>
      <section className="section section-soft" aria-labelledby="trajetoria">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Trajetória</p>
            <h2 id="trajetoria">Experiência profissional.</h2>
          </div>
          <ol className="timeline">
            {profile.experience.map((job) => (
              <li key={job.start}>
                <article className="timeline-entry">
                  <div className="timeline-meta">
                    <p className="job-period">
                      <time dateTime={job.start}>
                        {job.period.split(" – ")[0]}
                      </time>{" "}
                      —{" "}
                      {job.end ? (
                        <time dateTime={job.end}>
                          {job.period.split(" – ")[1]}
                        </time>
                      ) : (
                        "atual"
                      )}
                    </p>
                    <p className="company">{job.company}</p>
                    <p>{job.detail}</p>
                  </div>
                  <div>
                    <h3>{job.role}</h3>
                    <ul className="responsibilities">
                      {job.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section
        className="section container split-section"
        aria-labelledby="formacao"
      >
        <div>
          <p className="eyebrow">Formação acadêmica</p>
          <h2 id="formacao">Ciência da Computação.</h2>
        </div>
        <article className="education">
          <p className="status-label">
            {profile.education.status} · {profile.education.completion}
          </p>
          <h3>{profile.education.course}</h3>
          <p>{profile.education.institution}</p>
          <p>{profile.education.period}</p>
        </article>
      </section>
    </>
  );
}
