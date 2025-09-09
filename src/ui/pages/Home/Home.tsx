export const Home = () => {
  return (
    <section className='flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-6 text-center'>
      <h1 className='text-4xl md:text-6xl font-bold mb-6 text-cyan-400'>Привет 👋 Я разработчик</h1>
      <p className='text-lg md:text-xl text-gray-300 max-w-2xl'>
        Специализируюсь на <span className='text-cyan-300'>TypeScript</span> и <span className='text-cyan-300'>C#</span>
        . Разрабатываю веб-приложения, API и делаю красивые интерфейсы.
      </p>
      <div className='mt-8 flex gap-4'>
        <a
          href='/resume.pdf'
          className='px-6 py-3 rounded bg-cyan-500 text-white font-semibold hover:bg-cyan-400 transition'
        >
          Скачать резюме
        </a>
        <a
          href='/contact'
          className='px-6 py-3 rounded border border-cyan-500 text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-white transition'
        >
          Связаться
        </a>
      </div>
    </section>
  );
};
