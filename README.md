# 🏥 Sistema ASO/NR/Integração - SA SOFTWARES

Sistema completo para gestão de Atestados de Saúde Ocupacional (ASO), Normas Regulamentadoras (NR) e treinamentos de Integração para empresas de Segurança do Trabalho.

## 📋 Funcionalidades

### 👥 Gestão de Colaboradores
- ✅ Cadastro completo de colaboradores
- ✅ Dados pessoais, endereço e informações trabalhistas
- ✅ Status ativo/inativo
- ✅ Busca e filtros avançados
- ✅ Máscaras automáticas para CPF, telefone e CEP
- ✅ Busca automática de endereço via CEP (API ViaCEP)

### 📄 Gestão de Documentos
- ✅ Cadastro de ASO, NR e Integração
- ✅ Cálculo automático de vencimento
- ✅ Normas Regulamentadoras personalizáveis
- ✅ Filtros por tipo, status e colaborador
- ✅ Histórico completo de documentos

### ⏰ Controle de Vencimentos
- ✅ Dashboard com próximos vencimentos
- ✅ Sistema de alertas (vencido, 5, 15 e 30 dias)
- ✅ Filtros avançados por status e tipo
- ✅ Busca por colaborador
- ✅ Ordenação personalizável

### 📧 Sistema de Notificações
- ✅ Envio automático de e-mails via EmailJS
- ✅ Integração com WhatsApp
- ✅ Mensagens personalizáveis
- ✅ Histórico de notificações enviadas
- ✅ Configuração de múltiplos avisos

### ⚙️ Configurações Avançadas
- ✅ Personalização de validades por tipo de documento
- ✅ Gestão dinâmica de NRs
- ✅ Templates de mensagens customizáveis
- ✅ Configuração de avisos automáticos
- ✅ Dados da empresa e responsáveis

## 🚀 Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Firebase Firestore (NoSQL)
- **E-mail**: EmailJS para envio de notificações
- **Integração**: WhatsApp Web API
- **APIs**: ViaCEP para busca automática de endereços

## 🛠️ Instalação e Configuração

### 1. Pré-requisitos
- Conta no Firebase
- Conta no EmailJS
- Navegador web moderno

### 2. Configuração do Firebase

1. Acesse o [Firebase Console](https://console.firebase.google.com)
2. Crie um novo projeto
3. Ative o Firestore Database
4. Copie as credenciais do projeto
5. Substitua no arquivo `index.html`:

```javascript
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    projectId: "SEU_PROJETO_ID",
    storageBucket: "SEU_PROJETO.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
};
```

### 3. Configuração do EmailJS

1. Acesse [EmailJS](https://www.emailjs.com)
2. Crie uma conta e configure um serviço de e-mail
3. Crie um template de e-mail
4. Substitua as constantes no arquivo:

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'SUA_PUBLIC_KEY',
    SERVICE_ID: 'SEU_SERVICE_ID',
    TEMPLATE_ID: 'SEU_TEMPLATE_ID'
};
```

### 4. Template de E-mail (EmailJS)

Configure seu template com as seguintes variáveis:

```
Para: {{to_email}}
Nome: {{to_name}}
De: {{from_name}}
Empresa: {{empresa}}
Mensagem: {{mensagem_completa}}
Cópia: {{cc_email}}
Responder para: {{reply_to}}
```

### 5. Estrutura do Firestore

O sistema criará automaticamente as seguintes coleções:

```
- colaboradores/
  - id (string)
  - nome (string)
  - email (string)
  - setorFuncao (string)
  - dataAdmissao (string)
  - ativo (boolean)
  - endereco (object)
  - ...

- documentos/
  - id (string)
  - colaboradorId (string)
  - tipo (string)
  - subtipo (string)
  - dataRealizacao (string)
  - dataVencimento (string)
  - ...

- configuracoes/
  - main (document com todas as configurações)

- emailsEnviados/
  - registros de e-mails enviados

- whatsappsEnviados/
  - registros de WhatsApp enviados
```

## 🔐 Login

Credenciais padrão:
- **Usuário**: `*******`
- **Senha**: `*******`

> ⚠️ **Importante**: Altere as credenciais em produção!

## 📱 Como Usar

### Dashboard
- Visualize estatísticas gerais do sistema
- Acompanhe próximos vencimentos
- Monitor de notificações enviadas

### Colaboradores
- Cadastre novos colaboradores com dados completos
- Edite informações existentes
- Use filtros para encontrar rapidamente

### Documentos
- Registre ASO, NR e Integração
- O sistema calcula automaticamente as datas de vencimento
- Gerencie diferentes tipos de NR

### Vencimentos
- Monitore documentos próximos ao vencimento
- Envie notificações individuais
- Use filtros avançados para análises

### Configurações
- Personalize validades dos documentos
- Configure mensagens de notificação
- Gerencie NRs disponíveis
- Teste configurações de e-mail

## 🎨 Características do Design

- **Interface Moderna**: Design responsivo com gradientes e animações
- **UX Otimizada**: Navegação intuitiva e feedback visual
- **Mobile First**: Totalmente adaptável para dispositivos móveis
- **Loading States**: Feedback visual durante operações
- **Sistema de Alertas**: Notificações contextuais para o usuário

## 🔧 Customização

### Adicionando Novas NRs
1. Acesse "Configurações"
2. Clique em "Adicionar NR"
3. Informe o código (ex: NR-36) e validade em dias

### Personalizando Mensagens
1. Vá para "Configurações"
2. Edite os templates de mensagem
3. Use variáveis: `{NOME}`, `{DIAS}`, `{DOCUMENTO}`, `{RESPONSAVEL}`, `{EMPRESA}`

### Configurando Avisos Automáticos
1. Defina os dias para cada aviso (padrão: 15, 10, 5 dias)
2. Escolha o tipo de envio (e-mail, WhatsApp ou ambos)

## 🐛 Troubleshooting

### E-mails não são enviados
1. Verifique as configurações do EmailJS
2. Use o botão "Testar E-mail" nas configurações
3. Confirme se o template está correto
4. Verifique o console do navegador para erros

### Dados não são salvos
1. Verifique as configurações do Firebase
2. Confirme se o Firestore está ativo
3. Verifique as regras de segurança do Firestore

### Interface não carrega
1. Verifique a conexão com a internet
2. Confirme se todos os scripts estão carregando
3. Verifique o console para erros JavaScript

## 📝 Licença

Este projeto é propriedade da **NG Assessorias** e está licenciado para uso interno.

## 👨‍💻 Desenvolvedor

**Saulo Arradi**  
SA SOFTWARES
📧 sauloarradi@gmail.com

## 🆕 Versão

**v1.0.0** - Sistema completo com todas as funcionalidades principais

---

## 📞 Suporte

Para suporte técnico ou dúvidas sobre o sistema:

- 📧 E-mail: sauloarradi@gmail.com
- 🏢 Empresa: SA SOFTWARES
- 🔧 Tipo de suporte: Configuração, uso e manutenção

---

⚡ **Sistema desenvolvido com foco na eficiência e segurança do trabalho!**
