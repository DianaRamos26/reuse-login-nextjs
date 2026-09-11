import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FDFBF7] px-6 py-12">
      <div className="w-full max-w-sm text-center">
        
        {/* Título e Subtítulo */}
        <h2 className="text-2xl font-bold text-gray-800 text-left flex items-center gap-1">
          Bem-vindo(a) de volta! <span className="text-orange-400">💛</span>
        </h2>
        <p className="text-sm text-gray-500 text-left mt-1 mb-8">
          Entre para continuar transformando o mundo!
        </p>

        {/* Formulário */}
        <form className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">E-mail</label>
            <input 
              type="email" 
              placeholder="seuemail@exemplo.com"
              className="w-full border-b border-gray-300 py-2 text-sm focus:border-pink-500 focus:outline-none bg-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">Senha</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full border-b border-gray-300 py-2 text-sm focus:border-pink-500 focus:outline-none bg-transparent"
              required
            />
          </div>

          <div className="text-right">
            <Link href="/esqueci-senha" className="text-xs text-pink-500 font-semibold hover:underline">
              Esqueci minha senha
            </Link>
          </div>

          {/* Botão Principal Rosa */}
          <button 
            type="submit" 
            className="w-full bg-[#E52370] text-white py-3 rounded-xl font-semibold shadow-md hover:bg-[#c2185b] transition-all mt-4"
          >
            Entrar
          </button>
        </form>

        {/* Divisor "ou" */}
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-xs">ou</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Botões de Redes Sociais */}
        <div className="space-y-3">
          <button type="button" className="flex w-full items-center justify-center gap-3 border border-gray-300 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#F5F2EB]">
            <span className="text-blue-500 font-bold">G</span> Entrar com Google
          </button>
          
          <button type="button" className="flex w-full items-center justify-center gap-3 border border-gray-300 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#F5F2EB]">
            <span className="text-blue-800 font-bold">f</span> Entrar com Facebook
          </button>
        </div>

        {/* Link para criar conta */}
        <p className="mt-8 text-sm text-gray-500">
          Não tem conta?{' '}
          <Link href="/cadastro" className="text-pink-500 font-bold hover:underline">
            Cadastre-se
          </Link>
        </p>

      </div>
    </div>
  );
}
