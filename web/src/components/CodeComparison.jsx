export default function CodeComparison() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#050505]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#d1d5db]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-white via-[#d1d5db] to-[#525252] mb-6">
            Write Less. Do More.
          </h2>
          <p className="text-base md:text-lg text-[#a1a1aa] max-w-2xl mx-auto">
            See how Jetend transforms a typical, bloated Express route with
            validation, hashing, and database logic into a clean, readable
            one-liner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Old Way Container */}
          <div className="rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden shadow-2xl">
            <div className="px-4 py-3 border-b border-white/5 bg-white/5 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
              <div className="w-3 h-3 rounded-full bg-[#10b981]" />
              <span className="ml-2 text-xs font-mono text-[#a1a1aa]">
                The Old Way
              </span>
            </div>
            <div className="p-6 overflow-x-auto text-sm">
              <pre className="font-mono text-[#a1a1aa] leading-relaxed">
                <code
                  dangerouslySetInnerHTML={{
                    __html: `const <span className="text-[#c678dd]">express</span> = require('express');
const <span className="text-[#c678dd]">User</span> = require('./models/User');
const <span className="text-[#c678dd]">bcrypt</span> = require('bcrypt');
const <span className="text-[#c678dd]">jwt</span> = require('jsonwebtoken');
const <span className="text-[#e5c07b]">router</span> = express.<span className="text-[#61afef]">Router</span>();

router.<span className="text-[#61afef]">post</span>('/login', async (req, res) => {
  <span className="text-[#c678dd]">try</span> {
    const { email, password } = req.body;
    
    <span className="text-[#5c6370]">/* Manual validation */</span>
    <span className="text-[#c678dd]">if</span> (!email || !password) {
      <span className="text-[#c678dd]">return</span> res.<span className="text-[#61afef]">status</span>(400).<span className="text-[#61afef]">json</span>({ error: "Missing fields" });
    }
    <span className="text-[#c678dd]">if</span> (!/\\S+@\\S+\\.\\S+/.<span className="text-[#61afef]">test</span>(email)) {
       <span className="text-[#c678dd]">return</span> res.<span className="text-[#61afef]">status</span>(400).<span className="text-[#61afef]">json</span>({ error: "Invalid email FORMAT" });
    }

    const user = <span className="text-[#c678dd]">await</span> User.<span className="text-[#61afef]">findOne</span>({ email });
    <span className="text-[#c678dd]">if</span> (!user) <span className="text-[#c678dd]">return</span> res.<span className="text-[#61afef]">status</span>(404).<span className="text-[#61afef]">json</span>({ error: "User not found" });

    const isValid = <span className="text-[#c678dd]">await</span> bcrypt.<span className="text-[#61afef]">compare</span>(password, user.password);
    <span className="text-[#c678dd]">if</span> (!isValid) <span className="text-[#c678dd]">return</span> res.<span className="text-[#61afef]">status</span>(401).<span className="text-[#61afef]">json</span>({ error: "Invalid credentials" });

    const token = jwt.<span className="text-[#61afef]">sign</span>({ id: user._id }, process.env.JWT_SECRET);
    res.<span className="text-[#61afef]">status</span>(200).<span className="text-[#61afef]">json</span>({ token, user });
  } <span className="text-[#c678dd]">catch</span> (err) {
    res.<span className="text-[#61afef]">status</span>(500).<span className="text-[#61afef]">json</span>({ error: "Server Error" });
  }
});`,
                  }}
                ></code>
              </pre>
            </div>
          </div>

          {/* JetEnd Way Container */}
          <div className="relative rounded-2xl bg-[#0a0a0a] border border-[#d1d5db]/50 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)] group">
            {/* Highlight border on hover */}
            <div className="absolute inset-0 border-2 border-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-[inset_0_0_20px_rgba(255,255,255,0.3)]" />

            <div className="px-4 py-3 border-b border-[#d1d5db]/20 bg-[#d1d5db]/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                <div className="w-3 h-3 rounded-full bg-[#10b981]" />
                <span className="ml-2 text-xs font-mono text-white font-semibold">
                  ✨ The JetEnd Way
                </span>
              </div>
            </div>
            <div className="p-6 overflow-x-auto text-sm relative">
              {/* Subtle orange glow inside code block */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d1d5db]/5 to-transparent pointer-events-none" />
              <pre className="font-mono text-[#d1d5db] leading-relaxed relative z-10">
                <code
                  dangerouslySetInnerHTML={{
                    __html: `import { <span className="text-[#61afef]">post</span>, <span className="text-[#e5c07b]">db</span>, <span className="text-[#61afef]">validate</span>, <span className="text-[#61afef]">comparePassword</span>, <span className="text-[#61afef]">generateJWT</span>, <span className="text-[#61afef]">success</span>, <span className="text-[#61afef]">error</span> } from <span className="text-[#98c379]">'jetend'</span>;
import <span className="text-[#e5c07b]">User</span> from <span className="text-[#98c379]">'./models/User'</span>;

<span className="text-[#61afef]">post</span>(<span className="text-[#98c379]">'/login'</span>, async ({ req, res }) => {
  <span className="text-[#c678dd]">if</span> (!<span className="text-[#61afef]">validate</span>(req.body, { email: <span className="text-[#98c379]">"email|required"</span>, password: <span className="text-[#98c379]">"required"</span> })) 
    <span className="text-[#c678dd]">return</span> <span className="text-[#61afef]">error</span>(res, <span className="text-[#98c379]">"Validation failed"</span>, 400);

  const [user] = <span className="text-[#c678dd]">await</span> db.mongo.<span className="text-[#61afef]">read</span>(User, { email: req.body.email });
  <span className="text-[#c678dd]">if</span> (!user || !(<span className="text-[#c678dd]">await</span> <span className="text-[#61afef]">comparePassword</span>(req.body.password, user.password)))
    <span className="text-[#c678dd]">return</span> <span className="text-[#61afef]">error</span>(res, <span className="text-[#98c379]">"Invalid credentials"</span>, 401);

  <span className="text-[#c678dd]">return</span> <span className="text-[#61afef]">success</span>(res, <span className="text-[#98c379]">"Login successful"</span>, { token: <span className="text-[#61afef]">generateJWT</span>({ id: user._id }), user });
});`,
                  }}
                ></code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
