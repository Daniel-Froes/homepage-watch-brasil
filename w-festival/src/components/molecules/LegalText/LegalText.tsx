import Text from '../../atoms/Text'

interface LegalTextProps {
  className?: string
}

const legalTexts = [
  'Check the Parental Guidance Rating © 2024 WarnerMedia Direct Latin America, LLC. All rights reserved. Max is used under license. © 2024 Globo Comunicação e Participações S.A. All rights reserved. Big Brother Brasil is used under license. The trademarks GLOBO®, TV GLOBO®, GLOBO NEWS®, CANAL BRASIL®, SPORTV®, MULTISHOW®, OFF®, GNT®, BIS®, GLOOBINHO®, GLOOB®, VIVA®, MODO VIAGEM®, PREMIERE®, and COMBATE® are properties of Globo Comunicação e Participações S.A. © 2024 NBCUniversal. All rights reserved. The Universal, Studio Universal, and USA Network trademarks are properties of NBCUniversal. © 2024 Telecine Programação De Filmes Ltda. All rights reserved. The registered trademarks TELECINE® and MEGAPIX® are properties of Telecine Programação De Filmes Ltda. Paramount+ © 2024 Paramount. All rights reserved.'
]

export default function LegalText({ className = '' }: LegalTextProps) {
  return (
    <div className={`space-y-watch-2 ${className}`}>
      {legalTexts.map((text, index) => (
        <Text 
          key={index}
          size="xs" 
          className="text-watch-gray-500 leading-relaxed"
        >
          {text}
        </Text>
      ))}
    </div>
  )
}
