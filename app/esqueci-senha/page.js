import Link from 'next/link';

export default function EsqueciSenha() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FDFBF7] px-6 py-12">
      <div className="w-full max-w-sm text-center">
        
        {/* Título e Subtítulo */}
        <h2 className="text-2xl font-bold text-gray-800 text-left flex items-center gap-1">
          Recuperar Senha <span className="text-[#FFCC00]">💛</span>
        </h2>
        <p className="text-sm text-gray-500 text-left mt-1 mb-8">
          Insira seu e-mail cadastrado para enviarmos as instruções de recuperação.
        </p>

        {/* Formulário de Recuperação */}
        <form className="space-y-6 text-left">
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">E-mail cadastrado</label>
            <input 
              type="email" 
              placeholder="seuemail@exemplo.com"
              className="w-full border-b border-gray-300 py-2 text-sm focus:border-pink-500 focus:outline-none bg-transparent"
              required
            />
          </div>

          {/* Botão Principal */}
          <button 
            type="submit" 
            className="w-full bg-[#E52370] text-white py-3 rounded-xl font-semibold shadow-md hover:bg-[#c2185b] transition-all mt-4"
          >
            Enviar Instruções
          </button>
        </form>

        {/* Link de retorno otimizado */}
        <p className="mt-8 text-sm text-gray-500">
          Lembrou a senha?{' '}
          <Link href="/" className="text-pink-500 font-bold hover:underline">
            Voltar para o login
          </Link>
        </p>

      </div>
    </div>
  );
}
