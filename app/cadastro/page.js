import Link from 'next/link';

export default function Cadastro() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FDFBF7] px-6 py-12">
      <div className="w-full max-w-sm text-center">
        
        {/* Título e Subtítulo */}
        <h2 className="text-2xl font-bold text-gray-800 text-left flex items-center gap-1">
          Crie sua conta <span className="text-[#FFCC00]">💛</span>
        </h2>
        <p className="text-sm text-gray-500 text-left mt-1 mb-8">
          Junte-se a nós e comece a transformar o mundo!
        </p>

        {/* Formulário de Cadastro */}
        <form className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">Nome completo</label>
            <input 
              type="text" 
              placeholder="Seu nome"
              className="w-full border-b border-gray-300 py-2 text-sm focus:border-pink-500 focus:outline-none bg-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">E-mail</label>
            <input 
              type="email" 
              placeholder="voce@email.com"
              className="w-full border-b border-gray-300 py-2 text-sm focus:border-pink-500 focus:outline-none bg-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">Senha</label>
            <input 
              type="password" 
              placeholder="Mínimo de 8 caracteres"
              className="w-full border-b border-gray-300 py-2 text-sm focus:border-pink-500 focus:outline-none bg-transparent"
              required
            />
          </div>

          <p className="text-[11px] text-gray-400 leading-tight mt-2">
            Ao criar sua conta, você concorda com os <span className="text-pink-500 cursor-pointer hover:underline">termos de uso</span> e a <span className="text-pink-500 cursor-pointer hover:underline">política de privacidade</span> da ReUse.
          </p>

          {/* Botão Principal */}
          <button 
            type="submit" 
            className="w-full bg-[#E52370] text-white py-3 rounded-xl font-semibold shadow-md hover:bg-[#c2185b] transition-all mt-6"
          >
            Cadastrar
          </button>
        </form>

        {/* Link para voltar ao Login */}
        <p className="mt-8 text-sm text-gray-500">
          Já tem uma conta?{' '}
          <Link href="/" className="text-pink-500 font-bold hover:underline">
            Entrar
          </Link>
        </p>

      </div>
    </div>
  );
}
