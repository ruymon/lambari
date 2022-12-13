import { Checkmark } from '@carbon/icons-react';
import { useState } from 'react';

export function AppealPage({}: AppealPageProps) {
  const [isSent, setSent] = useState(false);
  const [appealer, setAppealer] = useState('');
  const [appealReason, setAppealReason] = useState('');

  function handleAppealSubmit() {
    const messgaeContent = {
      content: 'Novo registro de apelação.',
      embeds: [
        {
          type: 'rich',
          title: `NOVO REGISTRO DE APELAÇÃO`,
          description: `Registre-se nessa data a apelação do sr(a) ${appealer}.`,
          color: 0x22c55e,
          fields: [
            {
              name: `HORA DE REGISTRO`,
              value: `<t:${Math.floor(Date.now() / 1000)}:F>`,
              inline: true
            },
            {
              name: `APELADOR`,
              value: appealer,
              inline: true
            },
            {
              name: `MOTIVO:`,
              value: appealReason
            }
          ],
          thumbnail: {
            url: `https://i.imgur.com/aDyBr4R.png`,
            height: 0,
            width: 0
          },
          footer: {
            text: `Emitido automaticamente | Lambari Top Fish - BETA 0.1`,
            icon_url: `https://i.imgur.com/aDyBr4R.png`
          }
        }
      ]
    };

    fetch(
      'https://discord.com/api/webhooks/1051953908811042846/rCdsdORN4KZUYHCRKY9k3jThCwd2YsijWZnabcbgXiBH0nMH3934fwzsazYNDdVDwdVa',
      {
        method: 'POST',
        body: JSON.stringify(messgaeContent),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then((res) => {
      console.log(res);
      setSent(true);
      setAppealReason('');
      setAppealer('');
      setTimeout(() => {
        setSent(false);
      }, 5000);
    });
  }

  return (
    <main className="flex flex-col gap-1 w-full h-full overflow-y-auto border-r dark:border-gray-800/50 border-gray-100">
      <div className="px-6 py-8 pb-16 flex flex-col gap-1 items-start bg-cover bg-bottom bg-no-repeat bg-[url('./assets/appeal_bg.png')]">
        <h1 className="text-2xl text-gray-600 dark:text-gray-200 font-bold">Registros de Apelação</h1>
        <span className="text-md font-semibold text-gray-500 dark:text-gray-400">
          Cadastre, visualize e audite os registros no servidor.
        </span>
      </div>

      <div className="w-full px-6 gap-6 flex-col flex -mt-8">
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="dark:text-gray-300 font-semibold text-lg text-gray-600">Apelador:</span>
            <span className="text-gray-500 tex-sm">
              Digite o nome do infrator. Pode usar o{' '}
              <code className="bg-gray-300 text-gray-500 dark:bg-gray-800 px-1 rounded-sm text-sm font-bold">ID</code>{' '}
              do Discord.
            </span>
          </div>
          <input
            className="py-2 px-4 dark:bg-gray-800/25 dark:border-gray-800 border dark:placeholder:text-gray-700 dark:text-gray-400"
            required
            type="text"
            value={appealer}
            onChange={(e) => setAppealer(e.target.value)}
            placeholder="Ruy Monteiro / <@405734752143015937>"
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <div className="flex flex-col">
            <span className="dark:text-gray-300 font-semibold text-lg text-gray-600">Motivo da apelação:</span>
            <span className="text-gray-500 tex-sm">Descreva o ocorrido em detalhes.</span>
          </div>
          <textarea
            className="py-2 px-4 dark:bg-gray-800/25 dark:border-gray-800 border dark:placeholder:text-gray-700 dark:text-gray-400 max-h-44"
            required
            type="text"
            value={appealReason}
            onChange={(e) => setAppealReason(e.target.value)}
            placeholder="Descrição do ocorrido..."
          />
        </div>

        <button
          className="bg-amber-500 disabled:opacity-40 disabled:cursor-not-allowed py-3 px-4 mt-8 focus:outline-none hover:bg-amber-600 disabled:hover:bg-amber-500 text-white font-semibold transition-all"
          onClick={handleAppealSubmit}
          disabled={appealer.trim() === '' || appealReason.trim() === ''}
        >
          Novo registro
        </button>

        {isSent && (
          <div className="py-3 px-4 bg-green-500 w-full text-white flex items-center gap-4">
            <Checkmark size={24} />
            <span>Apelação Registrada com sucesso.</span>
          </div>
        )}
      </div>
    </main>
  );
}
