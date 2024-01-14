
const publishableKey = "pk_test_aW52aXRpbmctbWFzdGlmZi0yMC5jbGVyay5hY2NvdW50cy5kZXYk"; //Coloque sua chave clerk aqui!!!!!!!!!

const customLocalization = {
  socialButtonsBlockButton: "Entrar com {{provider|titleize}}",
  dividerText: 'ou',
  formFieldLabel__firstName: 'Nome',
  formFieldLabel__lastName: 'Sobrenome',
  formFieldHintText__optional: 'Opicional',
  actionText: 'Tem uma conta?',
  formFieldLabel__username: 'Nome de usuário',
  formFieldLabel__emailAddress: 'Email',
  formFieldLabel__phoneNumber: 'Número de telefone',
  formFieldLabel__password: 'Senha',
  formButtonPrimary: 'Continuar',
  formFieldLabel__emailAddress_username: 'Email ou nome de usuário',
  formFieldAction__forgotPassword: 'Esqueceu sua senha?',
  backButton: 'Voltar',
  footerActionLink__useAnotherMethod: 'Use outro método',
  badge__primary: 'Primário',
  badge__secondary: 'Secundário',
  badge__tertiary: 'Terciário',
  formFieldLabel__confirmDeletion: 'Confirmação',
  badge__thisDevice: 'Este aparelho',
  badge__unverified: 'Não verificado',
  formFieldLabel__newPassword: 'Nova senha',
  formFieldLabel__confirmPassword: 'Confirmar senha',
  formFieldLabel__signOutOfOtherSessions: 'Sair de todos os outros dispositivos',
  formFieldLabel__currentPassword: 'Coloque a senha atual',

  userButton: {
    action__manageAccount: 'Gerenciar conta',
    action__signOut: 'Sair',
    formButtonPrimaryt: 'Dashboard',
  },

  userProfile: {
    formButtonReset: 'Cancelar',
    formButtonPrimary__finish: 'Terminar',
    formButtonPrimary__continue: 'Continuar',

    start: {
      headerTitle__account: 'Conta',
      headerSubtitle__account: 'Gerencie as informações da sua conta',
      headerTitle__security: 'Segurança',
      headerSubtitle__security: 'Gerencie suas preferências de segurança',

      profileSection: {
        title: 'Perfil',
      },

      usernameSection: {
        title: 'Nome de usuário',
        primaryButton__changeUsername: 'Mude nome de usuário',
      },

      connectedAccountsSection: {
        title: "Contas conectadas",
        primaryButton: 'Conectar conta',
      },

      mfaSection: {
        title: 'Verificação em duas etapas',
        primaryButton: 'Adicionar verificação em duas etapas',

        phoneCode: {
          title__default: 'Fator padrão',
          subtitle__default: 'Este fator será usado como método padrão de verificação em duas etapas ao fazer login.',
          destructiveActionTitle: 'Remover',
          destructiveActionSubtitle: 'Remova este número de telefone dos métodos de verificação em duas etapas',
          destructiveActionLabel: 'Remover número de telefone',
        }
      },

      phoneNumbersSection: {
        title: 'Número de telefone',
        primaryButton: 'Adicionar número de telefone',
        detailsTitle__primary: 'Número de Telefone principal',
        detailsTitle__secondary: 'Número de Telefone secondário',
        detailsTitle__tertiary: 'Número de Telefone terciário',
        detailsSubtitle__primary: 'Este número de telefone é o número de telefone principal',
        detailsSubtitle__secondary: 'Este número de telefone é o número de telefone secundário',
        detailsSubtitle__tertiary: 'Este número de telefone é o número de telefone terciário',
        detailsTitle__unverified: 'Verificar número de telefone',
        detailsSubtitle__unverified: 'Conclua a verificação para acessar todos os recursos com este número de telefone',
        detailsAction__unverified: 'Verificar número de telefone',
        destructiveActionTitle: 'Remover',
        destructiveActionSubtitle: 'Exclua este número de telefone e remova-o da sua conta',
        destructiveAction: 'Remover número de telefone',
      },

      activeDevicesSection: {
        title: 'Dispositivos ativos',
        detailsTitle: 'Dispositivo atual',
        detailsSubtitle: 'Este é o dispositivo que você está usando atualmente',
        destructiveActionTitle: 'Sair',
        destructiveActionSubtitle: 'Saia da sua conta neste dispositivo',
        destructiveAction: 'Sair do dispositivo',
      },

      dangerSection: {
        title: 'Atenção',
        deleteAccountTitle: 'Deletar conta',
        deleteAccountDescription: 'Exclua sua conta e todos os dados associados',
        deleteAccountButton: 'Deletar'
      },

      passwordSection: {
        title: 'Senha',
        primaryButton__setPassword: 'Configurar senha',
        primaryButton__changePassword: 'Mudar senha',
      },

      connectedAccountsSection: {
        title: 'Contas conectadas',
        primaryButton: 'Conectar conta',
        destructiveActionTitle: 'Remover',
        destructiveActionSubtitle: 'Remova esta conta conectada da sua conta',
        destructiveActionAccordionSubtitle: 'Remover conta conectada',
      },

      emailAddressesSection: {
        title: 'Endereço de email',
        primaryButton: 'Adicionar um endereço de email',
        detailsTitle__primary: 'Endereço de email primário',
        detailsTitle__secondary: 'Endereço de email secundário',
        detailsTitle__tertiary: 'Endereço de email terciário',
        detailsSubtitle__primary: 'Este endereço de e-mail é o endereço de e-mail principal',
        detailsSubtitle__secondary: 'Este endereço de e-mail é o endereço de e-mail secundário',
        detailsSubtitle__tertiary: 'Este endereço de e-mail é o endereço de e-mail terciário',
        destructiveActionTitle: 'Remover',
        destructiveActionSubtitle: 'Exclua este endereço de e-mail e remova-o da sua conta',
        destructiveAction: 'Remover endereço de email',
      },

    },

    profilePage: {
      title: 'Atualizar conta',
      imageFormTitle: 'Imagem de perfil',
      imageFormSubtitle: 'Enviar imagem',
      imageFormDestructiveActionSubtitle: 'Remover imagem',
      fileDropAreaTitle: 'Arraste o arquivo aqui ou...',
      fileDropAreaAction: 'Selecione um arquivo',
      fileDropAreaHint: 'Faça upload de uma imagem JPG, PNG, GIF ou WEBP menor que 10 MB',
      successMessage: 'Seu perfil foi atualizado.',
    },

    emailAddressPage: {
      title: 'Adicionar endereço email',

      removeResource: {
        title: 'Remover endereço de e-mail',
        messageLine1: 'O seu perfil será removido desta conta.',
        messageLine2: 'Você não poderá mais fazer login usando este endereço de e-mail.',
      },

      emailCode: {
        formHint: 'Um email contendo um código de verificação será enviado para este endereço de e-mail.',
        formTitle: 'Código de verificação',
        formSubtitle: 'Digite o código de verificação enviado para seu telefone',
      },

    },

    usernamePage: {
      title: 'Atualize o nome de usuário',
      successMessage: 'Seu nome de usuário foi atualizado.',
    },

    mfaPhoneCodePage: {
      title: 'Adicionar verificação de código SMS',
      subtitle__unavailablePhoneNumbers: 'Não há números de telefone disponíveis para registro na verificação em duas etapas do código SMS.',
      primaryButton__addPhoneNumber: 'Adicionar um número de telefone',
      subtitle__availablePhoneNumbers: 'Selecione um número de telefone para registrar-se na verificação em duas etapas do código SMS.',
      successMessage: 'A verificação em duas etapas do código SMS agora está habilitada para este número de telefone. Ao fazer login, você precisará inserir um código de verificação enviado para este número de telefone como uma etapa adicional.',

      removeResource: {
        title: 'Remover verificação em duas etapas',
        messageLine1: 'Seu número não receberá mais códigos de verificação ao fazer login.',
        messageLine2: 'Sua conta pode não ser tão segura. Você tem certeza que quer continuar?',
        successMessage: 'A verificação em duas etapas do código SMS foi removida para do seu número',
      },
    },

    phoneNumberPage: {
      title: 'Adicionar número de telefone',
      infoText: 'Uma mensagem de texto contendo um link de verificação será enviada para este número de telefone.',
      infoText__secondary: 'Podem ser aplicadas taxas de dados e mensagens.',
      successMessage: 'Seu número de telefone foi adicionado à sua conta.',

      removeResource: {
        title: 'Remover número de telefone',
        messageLine1: 'Seu número será removido desta conta.',
        messageLine2: 'Você não poderá mais fazer login usando este número de telefone.',
      },
    },

    passwordPage: {
      title: 'Configurar senha',
      sessionsSignedOutSuccessMessage: 'Todos os outros dispositivos foram desconectados.',
      changePasswordTitle: 'Mudar senha',
    },

    connectedAccountPage: {
      title: 'Adicionar conta conectada',
      formHint: 'Selecione um provedor para conectar sua conta.',
      socialButtonsBlockButton: 'Conectar ao seu perfil',
      formHint__noAccounts: 'Não há provedores de contas externas disponíveis.',
      successMessage: 'Seu número foi removido da sua conta com sucessos.',

      removeResource: {
        title: 'Remover conta conectada',
        messageLine1: 'O seu perfil será removido desta conta.',
        messageLine2: 'Você não poderá mais usar esta conta conectada e quaisquer recursos dependentes não funcionarão mais.',
        successMessage: 'O seu perfil foi removido da sua conta.',
      }
    },

    deletePage: {
      title: 'Deletar conta',
      messageLine1: 'Você tem certeza que quer deletar sua conta?',
      messageLine2: 'Essa ação é permanente e irreverssível',
      actionDescription: 'Escreva "Delete account" abaixo para continuar',
      confirm: 'Deletar',
    },

  },

  signUp: {

    start: {
      title: 'Crie sua conta',
      subtitle: '{{applicationName}}',
      actionText: 'Já possui uma conta?',
      actionLink: 'Entrar',
    },

    continue: {
      title: 'Preencha os campos faltantes',
      subtitle: '{{applicationName}}',
      actionText: 'Já possui uma conta?',
      actionLink: 'Entrar',
    },

    phoneCode: {
      title: 'Verifique seu telefone',
      subtitle: '{{applicationName}}',
      formTitle: 'Código de verificação',
      formSubtitle: 'Digite o código de verificação enviado para o seu número de telefone',
    }
  },

  signIn: {
    start: {
      title: 'Entrar',
      subtitle: '{{applicationName}}',
      actionLink__use_phone: 'Usar telefone',
      actionText: 'Não tem conta?',
      actionLink: 'Inscrever-se',
      actionLink__use_email_username: 'Use email ou nome de usuário',
    },

    forgotPasswordAlternativeMethods: {
      title: 'Esqueceu sua senha?',
      blockButton__resetPassword: 'Resete sua senha',
      label__alternativeMethods: 'Ou faça login com outro método.',
    },

    forgotPassword: {
      formSubtitle_email: 'Digite o código enviado para seu endereço de e-mail',
      title_email: 'Cheque seu email',
      subtitle: 'Para resetar sua senha',
      formTitle: 'Redefinir código de senha',
    },

    password: {
      title: 'Coloque sua senha',
      subtitle: '{{applicationName}}',
      actionLink: 'Use outro método',
    },

    alternativeMethods: {
      title: 'Use outro método',
      blockButton__emailLink: 'Link para seu email',
      blockButton__emailCode: 'Código para seu email',
      blockButton__phoneCode: 'Enviar código SMS',
      actionLink: 'Obter ajuda',

      getHelp: {
        title: 'Obter Ajuda',
        content: 'Se estiver com dificuldades para fazer login em sua conta, envie-nos um e-mail e trabalharemos com você para restaurar o acesso o mais rápido possível.',
        blockButton__emailSupport: 'Email do suporte',
      }
    },

    phoneCode: {
      title: 'Cheque seu telefone',
      subtitle: '{{applicationName}}',
      formTitle: 'Código de verificação',
      formSubtitle: 'Digite o código de verificação enviado para o seu número de telefone',
    },

    emailLink: {
      title: 'Cheque seu email',
      subtitle: '{{applicationName}}',
      formTitle: 'Link de Verificação',
      formSubtitle: 'Use o link de verificação e envie no seu email',
    },

    emailCode: {
      title: 'Cheque seu email',
      subtitle: '{{applicationName}}',
      formTitle: 'Código de verificação',
      formSubtitle: 'Digite o código de verificação enviado para seu endereço de e-mail',
    },

  }
};

const translateMessage = (message) => {
  return translations[message] || message;
};

const startClerk = async () => {
  const Clerk = window.Clerk;

  try {
    await Clerk.load({
      localization: customLocalization
    });

    const userButton = document.getElementById("user-button");
    const authLinks = document.getElementById("auth-links");

    Clerk.addListener(({ user }) => {
      authLinks.style.display = user ? "none" : "block";
    });

    if (Clerk.user) {
      Clerk.mountUserButton(userButton);
    }
  } catch (err) {
    console.error("Erro ao iniciar o Clerk: ", err);
  }
};

(() => {
  const script = document.createElement("script");
  script.setAttribute("data-clerk-publishable-key", publishableKey);
  script.async = true;
  script.src = `https://cdn.jsdelivr.net/npm/@clerk/clerk-js@latest/dist/clerk.browser.js`;
  script.crossOrigin = "anonymous";
  script.addEventListener("load", startClerk);
  script.addEventListener("error", () => {
    document.getElementById("apinotcorrect").hidden = false;
  });
  document.body.appendChild(script);
})();

function signInButton() {
  const Clerk = window.Clerk;

  Clerk.openSignUp({
    // Aqui é onde você pode configurar opções específicas para a tela de registro, se necessário
  });
}
