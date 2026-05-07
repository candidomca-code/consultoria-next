export const metadata = {
  title: "Portal da Consultoria Popular",
  description: "Análise de Perfil e Estratégia Jurídica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, background: "#f5f4fe", minHeight: "100vh" }}>
        {children}
      </body>
    </html>
  );
}