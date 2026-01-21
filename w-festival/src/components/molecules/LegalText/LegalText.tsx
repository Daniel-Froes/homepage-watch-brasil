interface LegalTextProps {
  className?: string
}

export default function LegalText({ className = '' }: LegalTextProps) {
  return (
    <div className={`text-gray-500 text-watch-3 leading-relaxed ${className}`}>
      <p className="mb-2">
        Check the Parental Guidance Rating © 2024 WarnerMedia Direct Latin America, LLC. All rights reserved. Max is used under license.
      </p>
      <p className="mb-2">
        © 2024 Globo Comunicação e Participações S.A. All rights reserved. Big Brother Brasil is used under license. The trademarks GLOBO®, TV GLOBO®, GLOBO NEWS®, CANAL BRASIL®, SPORTV®, MULTISHOW®, GNT®, BIS®, GLOBINHO®, GLOOB®, VIVA®, MODO VIAGEM®, PREMIERE®, and COMBATE® are properties of Globo Comunicação e Participações S.A.
      </p>
      <p className="mb-2">
        © 2024 NBCUniversal. All rights reserved. The Universal, Studio Universal, and USA Network trademarks are properties of NBCUniversal.
      </p>
      <p className="mb-2">
        © 2024 Telecine Programação de Filmes Ltda. All rights reserved. The registered trademarks TELECINE® and MEGAPIX® are properties of Telecine Programação De Filmes Ltda.
      </p>
      <p>
        Paramount+ © 2024 Paramount. All rights reserved.
      </p>
    </div>
  )
}
