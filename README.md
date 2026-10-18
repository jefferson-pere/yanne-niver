# Convite de aniversário em Next.js

Projeto com Next.js App Router e React. Ao abrir a página inicial, o convidado vê apenas o vídeo ocupando toda a área visível da tela, sem cabeçalho, rodapé ou rolagem. O player usa um componente cliente.

## Executar

Use Node.js 20.9 ou superior:

```sh
npm install
npm run dev
```

Abra http://localhost:3000. Para produção, execute `npm run build` e depois `npm start`.

## Vídeo e personalização

Coloque o vídeo em `public/videos/convite.mp4`, com esse nome exato. Prefira MP4 com vídeo H.264 e áudio AAC para compatibilidade com celulares.

O player tenta iniciar sem som, respeitando a preferência por movimento reduzido. Se o navegador bloquear a reprodução, aparece “Reproduzir convite”. O botão “Ativar som” habilita o áudio. Arquivos ausentes ou erros de reprodução mostram uma mensagem com botão para tentar novamente. Os controles nativos permitem pausar, repetir e navegar pelo vídeo.

Prefira um vídeo vertical 9:16 para celular. O vídeo preenche a tela com `object-fit: cover`, podendo cortar as bordas conforme a proporção do aparelho; mantenha textos importantes afastados das bordas. A página ocupa a área visível do navegador. Ocultar a interface do navegador pelo modo de tela cheia depende da interação do convidado e do suporte do aparelho.

Estilos: `app/globals.css`. Player: `app/invitation-video.jsx`.

Inclua `public/videos/convite.mp4` no commit antes de publicar pelo Git. O vídeo precisa acompanhar o código no repositório para ser incluído no deploy. Publique em uma hospedagem compatível com Next.js e HTTPS. Os arquivos em `public/` são públicos; o convite não exige autenticação.

Se o vídeo não carregar online, abra `https://seu-dominio/videos/convite.mp4`. Um erro 404 indica que o arquivo não foi publicado ou está com nome diferente. O nome deve ser exatamente `convite.mp4`, respeitando maiúsculas e minúsculas.

Validação: `npm run build`. Teste a reprodução com seu vídeo real antes de compartilhar o convite.
