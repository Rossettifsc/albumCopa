import { ref } from 'vue';

const user = ref<{ name: string; email: string } | null>(null);
const isAuthenticated = ref(false);

export function useAuth() {
  const login = (email: string, password: string) => {
    if (email && password.length >= 6) {
      user.value = { name: 'Usuário Exemplo', email };
      isAuthenticated.value = true;
      return true;
    }
    return false;
  };

  const logout = () => {
    user.value = null;
    isAuthenticated.value = false;
  };

  const cadastrar = (name: string, email: string, password: string) => {
    if (name && email && password.length >= 6) {
      user.value = { name, email };
      isAuthenticated.value = true;
      return true;
    }
    return false;
  };

  const resetarSenha = (email: string) => {
    if (email) {
      console.log(`Simulando envio de e-mail para: ${email}`);
      return true;
    }
    return false;
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
    cadastrar,
    resetarSenha
  };
}
