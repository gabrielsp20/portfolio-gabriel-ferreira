"use client";

import { useRef, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "manual">("idle");
  const input = useRef<HTMLInputElement>(null);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("manual");
    }
  }

  return (
    <div className="copy-email">
      <button className="button button-secondary" type="button" onClick={copy}>
        Copiar e-mail <span aria-hidden="true">⧉</span>
      </button>
      <p
        className="copy-status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {status === "copied"
          ? "E-mail copiado para a área de transferência."
          : status === "manual"
            ? "Não foi possível copiar automaticamente. Selecione o endereço abaixo e use Ctrl+C ou mantenha o texto pressionado no celular para copiar."
            : ""}
      </p>
      {status === "manual" && (
        <div className="manual-copy">
          <label htmlFor="email-manual">E-mail para copiar manualmente</label>
          <input
            ref={input}
            id="email-manual"
            value={email}
            readOnly
            autoFocus
            onFocus={(event) => event.currentTarget.select()}
            onClick={() => input.current?.select()}
          />
        </div>
      )}
    </div>
  );
}
