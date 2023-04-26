const App = () => {
  return (
    <div className="App">
      <section className="side-bar">
        <button>+ New chat</button>
        <ul className="history">
          <li>aaaaa</li>
        </ul>
        <nav>
          <p>Powered by GPT</p>
        </nav>
      </section>
      <section className="main">
        <h1>demoGPT</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit">➳</div>
          </div>
          <p className="info">
            ChatGPT Mar 23 Version. Free Research Preview. ChatGPT may produce
            inaccurate information about people, places, or facts.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
