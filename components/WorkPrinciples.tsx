import profile from "../data/profile.json";

export function WorkPrinciples() {
  return (
    <ol className="principles">
      {profile.principles.map((principle, index) => (
        <li key={principle.title}>
          <span className="section-number" aria-hidden="true">
            0{index + 1}
          </span>
          <div>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
