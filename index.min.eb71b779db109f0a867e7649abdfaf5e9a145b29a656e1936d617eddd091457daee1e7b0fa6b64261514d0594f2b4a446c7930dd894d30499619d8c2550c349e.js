var suggestions=document.getElementById("suggestions"),userinput=document.getElementById("userinput");document.addEventListener("keydown",inputFocus);function inputFocus(e){e.keyCode===191&&(e.preventDefault(),userinput.focus()),e.keyCode===27&&(userinput.blur(),suggestions.classList.add("d-none"))}document.addEventListener("click",function(e){var t=suggestions.contains(e.target);t||suggestions.classList.add("d-none")}),document.addEventListener("keydown",suggestionFocus);function suggestionFocus(e){const s=suggestions.querySelectorAll("a"),o=[...s],t=o.indexOf(document.activeElement);let n=0;e.keyCode===38?(e.preventDefault(),n=t>0?t-1:0,s[n].focus()):e.keyCode===40&&(e.preventDefault(),n=t+1<o.length?t+1:t,s[n].focus())}(function(){var e=new FlexSearch.Document({tokenize:"forward",cache:100,document:{id:"id",store:["href","title","description"],index:["title","description","content"]}});e.add({id:0,href:"https://trueblocks.io/docs/",title:"Introduction",description:"TrueBlocks Docs",content:`<p>Are blockchains really meeting their promise?</p>
<h2 id="problem-statement">Problem Statement</h2>
<p>If you&rsquo;re like us, you fell in love with blockchains because of the promise they provide: world-wide, private, and permissionless
access to the most accurate and agreed-upon data ever produced. Near perfect data.</p>
<p>But in reality, it&rsquo;s as if we&rsquo;re just lost at sea. Awash in bytes.</p>
<img src="/docs/img/steam-boat-off-a-harbor.jpg" alt="Who's stearing this boat?" width="500"/>
<h2 id="world-wide">World-wide</h2>
<p>Blockchains are supposed to be world-wide. Are they? Yes, they are.</p>
<h2 id="permissionless">Permissionless</h2>
<p>Blockchains are supposed to be permissionless. Are they? Not really.</p>
<h2 id="accurate">Accurate</h2>
<p>Blockchains are supposed to be accurate. Are they? Well&hellip;on-chain they are, but
off-chain, not even close. Ask any crypto-accountant.</p>
<h2 id="problem-statement-1">Problem statement</h2>
<p>It is true that anyone may send a transaction to a blockchain. All one needs is a wallet and access to an RPC&hellip;
wait&hellip;access to an RPC&hellip;is that permissionless? Unless you&rsquo;re running your own node, no, it&rsquo;s not.</p>
<p>It&rsquo;s worse than that. Not only must you ask permission to send a transaction, you must
ask permission to see the results. &ldquo;Please Mr. Massive Blockchain Explorer in the Sky&hellip;
please may I see my transactions? Oh, and by the way, you&rsquo;re not watching me are you?&rdquo;</p>
<p>Worse even yet, have you ever actually tried to deeply understand what the blockchain explorer
is showing you? And why, after paying hundreds of dollars, does you crypto tax report have
massive, obvious errors?</p>
<p>TrueBlocks can&rsquo;t solve the first problem &ndash; eventually you&rsquo;re going to have to provide your
own access if you want the true benefits of decentralization. Luckily there are emerging
solutions such as <a href="https://dappnode.io/">dAppNode</a> and <a href="https://ava.do/">Avado</a>.</p>
<p>TrueBlocks can, however, solve the other two problems &ndash; accurate, private access to your
own transactions.</p>
<hr>
<p>Like Infura, anyone may visit EtherScan. That is true. Both of those systems are kind enough to
give us (give us!) whatever we ask for. But how long do you think it will take before they realize
(hint: they&rsquo;ve already have) how valuable their position in the ecosystem is? Do you think they&rsquo;re
not paying attention to what you&rsquo;re doing? Do you think they&rsquo;re not connecting your Ethereum address
to your IP address? I would be if I were them.</p>
<p>Websites and APIs are inherently the wrong solution for decentralized data for a number of reasons:</p>
<ol>
<li>They can see who you are because your browser tells them your IP address (not private!).</li>
<li>Because their resources are shared among many users, they must protect their system by rate limiting you (not permissionless!)
<ol>
<li>They use your IP address to rate limit you - that is, they know who you are each time you arrive</li>
</ol>
</li>
<li>Every time you visit EtherScan or use Infura, you do it with the same Ethereum address</li>
<li>They know who you are &ndash; they know your address &ndash; they know your spending habits &ndash; that&rsquo;s terrible for you</li>
</ol>
<p>Websites and APIs are terrible for you. If you think your privacy is being invaded today, wait until you start
telling them, with near perfect data, exactly what you spend your money on.</p>
<p>We all see this coming. No-one seems to want to do anything about it. In fact, we see an increasingly competitive
environment to provide you ingress and egress to the chain.</p>
<h2 id="solution">Solution</h2>
<p><a href="https://dappnode.io/">dAppNode</a>, <a href="https://github.com/ledgerwatch/erigon">Erigon</a> and TrueBlocks.</p>
`}).add({id:1,href:"https://trueblocks.io/docs/install/install-core/",title:"Install core",description:"TrueBlocks works on Linux and Mac",content:`<p>These instructions assume you can navigate the command line and edit configuration files.
If you need help with a particular step, see the <a href="/docs/install/install-troubleshooting">installation&rsquo;s troubleshooting section</a>.</p>
<h2 id="installation">Installation</h2>
<ul>
<li>
<p>Open a terminal window.</p>
</li>
<li>
<p>Type <code>go version</code>. If Go is not installed or your version is less than 1.18.0, <a href="https://go.dev/doc/install">install the latest version of Go</a></p>
</li>
<li>
<p>Install or upgrade the build dependencies: <em>git</em>, <em>cmake</em>, <em>ninja</em>, <em>curl</em>, <em>python</em>, <em>clang-format</em>, <em>jq</em></p>
<ul>
<li><a href="https://trueblocks.io/docs/install/install-troubleshooting/#installing-build-tools">Install dependencies</a>
<br><br></li>
</ul>
</li>
<li>
<p>Clone the repo and compile the executable:</p>
</li>
</ul>
<pre><code class="language-shell">git clone --depth 1 --branch master https://github.com/TrueBlocks/trueblocks-core
cd trueblocks-core
mkdir build &amp;&amp; cd build
cmake ../src
make                   # may be faster with make -j &lt;nproc&gt;
</code></pre>
<ul>
<li>
<p>Add <code>./trueblocks-core/bin</code> to your shell&rsquo;s $PATH. Check Google if you don&rsquo;t know what this means.</p>
</li>
<li>
<p>Type <code>chifra config --paths</code>. This will produce a display similar to the following (ignore any errors). Note the <code>$CONFIG</code> paths.</p>
</li>
</ul>
<pre><code class="language-[shell]">chifra status --paths:
  Config: $HOME/Library/Application Support/TrueBlocks/
  Cache : $HOME/Library/Application Support/TrueBlocks/cache/mainnet
  Index : $HOME/Library/Application Support/TrueBlocks/unchained/mainnet
</code></pre>
<ul>
<li>Next, edit a configuration file called <code>$CONFIG/trueBlocks.toml</code>. Edit this file and locate the <code>[chains.mainnet]</code> section. Add a valid RPC endpoint. If you don&rsquo;t know what this means, search Google.</li>
</ul>
<pre><code class="language-[shell]">[chains.mainnet]
...
rpcProvider = &quot;http://localhost:8545&quot;
...
</code></pre>
<ul>
<li>If you wish to use the <code>--articulate</code> feature (you probably do), add an API key to the following section:</li>
</ul>
<pre><code class="language-[shell]">[keys.etherscan]
...
apiKey = &quot;&lt;your Etherscan api key&gt;&quot;   # optional
...
</code></pre>
<h2 id="testing-the-install">Testing the install</h2>
<p>If you&rsquo;ve installed things properly, you should be able to now run the following command, which should return this data:</p>
<pre><code class="language-[shell]">chifra blocks 12
</code></pre>
<p>You should get results similar to these:</p>
<pre><code class="language-[shell]">{
  &quot;data&quot;: [
    {
      &quot;gasLimit&quot;: 5000,
      &quot;gasUsed&quot;: 0,
      &quot;hash&quot;: &quot;0xc63f666315fa1eae17e354fab532aeeecf549be93e358737d0648f50d57083a0&quot;,
      &quot;blockNumber&quot;: 12,
      &quot;parentHash&quot;: &quot;0x3f5e756c3efcb93099361b7ddd0dabfeaa592439437c1c836e443ccb81e93242&quot;,
      &quot;miner&quot;: &quot;0x0193d941b50d91be6567c7ee1c0fe7af498b4137&quot;,
      &quot;difficulty&quot;: 17179844608,
      &quot;finalized&quot;: true,
      &quot;timestamp&quot;: 1438270144,
      &quot;baseFeePerGas&quot;: 0
    }
  ]
}
</code></pre>
<ul>
<li>Assuming the above works, your system is properly installed. If not, see the <a href="/docs/install/install-troubleshooting">TroubleShooting section</a>.</li>
</ul>
<h2 id="more-information">More information</h2>
<p>There&rsquo;s a lot left to learn. Have fun:</p>
<ul>
<li><a href="/docs/install/build-unchained-index/">Using the Unchained Index</a></li>
<li><a href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/examples">Explore some coding examples</a></li>
<li><a href="/tags/tutorials/">View data science recipes</a></li>
<li><a href="/docs/install/install-explorer/">Use the explorer application</a></li>
</ul>
`}).add({id:2,href:"https://trueblocks.io/docs/prologue/about-trueblocks/",title:"About TrueBlocks",description:"How does TrueBlocks address the problem",content:`<h2 id="trueblocks-provides-a-solution">TrueBlocks provides a solution</h2>
<p>We think there are at least three fundamental problems with the current Ethereum ecosystem:</p>
<ol>
<li>It&rsquo;s difficult to run your own Ethereum node (not really, see below).</li>
<li>Even if one runs a node, getting useful data is nearly impossible.</li>
<li>All current solutions end up with a winner-take-all central database just like Google.</li>
</ol>
<p>We discuss each of these problems below.</p>
<h3 id="ethereum-nodes-are-difficult-to-run">Ethereum nodes are difficult to run</h3>
<p>Vitalik once called the Ethereum client software a &ldquo;Big, Hairy node.&rdquo; No wonder people think they are hard to run.</p>
<p>But, with the recent arrival of <a href="https://dappnode.io/">dAppNode</a> and <a href="https://ava.do/">Avado</a> things
have gotten much easier. Each of these products allows you to buy a machine, plug it in the wall,
and your soon you&rsquo;re running your own node.</p>
<p>You should to this now. Buy a dAppNode, plug it in, and enjoy the benefits of running your own node. Why wait?</p>
<h3 id="useful-data-is-hard-to-get">Useful data is hard to get</h3>
<p>It is our strong belief that the Ethereum RPC is broken. It&rsquo;s missing something. An index by address.</p>
<p>The goal of TrueBlocks is to provide exactly that missing piece. We call our solution the <a href="/docs/install/build-unchained-index/">Unchained Index</a>.</p>
<p>The Unchained Index is created locally on your machine &ndash; on the dAppNode. As a direct result of being local, the index has a number of amazing qualities:</p>
<ol>
<li><strong>It fixes the broken node:</strong> Without an index, one cannot query the node for a &ldquo;list of everything that ever happened to an address.&rdquo; With one, which is what the Unchained Index provides, one can make such a query. In effect this turns the node from a &ldquo;really shitting database,&rdquo; into a perfectly fine database.</li>
<li><strong>No rate limiting:</strong> Because both your node and the Unchained Index are local and not shared with other users, there is no need for rate limiting. Your can query the local node 100s of times faster than you can an API. This has massive implications for the types of applications you can build.</li>
<li><strong>Perfectly private:</strong> All queries happen against your local node - you don&rsquo;t expose your IP address to anyone, nor do you expose any information about which addresses you&rsquo;re interested in.</li>
<li><strong>Faster queries leads to a better index::</strong> Because we can query so much faster, we can dig MUCH deeper into the details of every block. This means our index contains more information about where an address appears on the chain. In fact, in tests against two popular Ethereum APIs, we consistently find 20-30% more appearances.</li>
<li><strong>More appearances means more accurate results:</strong> because our locally created index goes to a deeper level of detail, we can deliver to end user applications much more informative data. For example, we can fully reconcile transactions off-chain. Something not even the most expensive web-based services can do.</li>
<li><strong>Unique user experience:</strong> Because TrueBlocks is focused on the &ldquo;account&rdquo;, the user experience is cohesive &ndash; everything about an account is brought together in single interface. No more visiting a different website for each different dApp you interact with.</li>
</ol>
<p>TrueBlocks ships with large suite of command line tools that allow you to make exactly the queries you want to make. One of the
command line options is an API server which allows you to build blindly-fast desktop applications. We&rsquo;ve built an example of
such an application with our <a href="/docs/install/install-explorer">Account Explorer</a>.</p>
<h3 id="avoiding-winner-take-all">Avoiding winner-take-all</h3>
<p>In it&rsquo;s best incarnation, TrueBlocks runs locally against your own locally running node. If you build the thing yourself, no-one can take it away from you. After the initial synchronization of your node (Erigon, for example) which may take a few weeks, you can run one of TrueBlocks&rsquo; command line tools called <a href="/chifra/admin/#chifra-scrape">chifra scrape</a>. This process takes a few days.</p>
<p>To ease the burden of having to create the Unchained Index yourself, you may download it from IPFS using <a href="/chifra/admin/#chifra-init">chifra init</a>. Putting this data on IPFS has the very interesting consequence of sharing it. This makes it impossible for us (or anyone) to become the &ldquo;holder of all data&rdquo; which eventually leads to winner-take-all like Google. We want to purposefully avoid that.</p>
<p>This whole process is <a href="/docs/install/build-unchained-index/">better explained here</a>.</p>
<h2 id="unchained-index-provides-huge-advantages">Unchained Index provides huge advantages</h2>
<p>Besides the philosophical benefits, TrueBlocks is straight up more performant.</p>
<ul>
<li>Querying straight from your hard drive is <em>100s of times faster than an API</em>.</li>
<li>A local binary cache makes subsequent queries <em>nearly instantaneous</em>.</li>
<li>Avoiding a full extraction of the data from the node results in much lower hardware requirements: from <em>terabytes to gigabytes</em>.</li>
<li>Bloom filters further reduce storage overhead and greatly lessen the search time for particular addresses.</li>
<li>Articulation resolves the transactional detail at the byte level, <em>turning byte streams into human-readable data</em>.</li>
<li>The data can be exported into many formats: <em>JSON, CSV, TSV, OFX, etc.</em></li>
</ul>
<p>TrueBlocks performs so well because the design data first. We are lifelong hackers, and we agree with <a href="https://lwn.net/Articles/193245/">Linus Torvalds when he
said</a>:</p>
<blockquote>
<p>In fact, I&rsquo;m a huge proponent of designing your code around the data, rather than the other way around.</p>
</blockquote>
<h2 id="more-words">More words!</h2>
<p>We&rsquo;ve got more words for you. <a href="/blog/a-long-winded-explanation-of-trueblocks/">This blog post covers these topics in much more detail</a>.</p>
`}).add({id:3,href:"https://trueblocks.io/docs/install/build-unchained-index/",title:"Unchained Index",description:"There are three ways to get the index. Each way involves some tradeoff between initialization time, storage use, and local access.",content:`<table>
<thead>
<tr>
<th>If you want&hellip;</th>
<th>and you don&rsquo;t mind&hellip;</th>
<th>then use&hellip;</th>
</tr>
</thead>
<tbody>
<tr>
<td>to minimize the size of the data stored locally and<br>you want to get started faster&hellip;</td>
<td>slower first-time queries on new addresses, an index<br>that&rsquo;s slightly behind the head of the chain, an index<br>created by someone else&hellip;</td>
<td><a href="#use-init-to-get-only-the-chunks-you-query"><code>chifra init</code></a></td>
</tr>
<tr>
<td>to maximize the speed of first-time queries for<br>new addresses&hellip;</td>
<td>longer initial setup time, ~70 GB of local storage, an<br>index that&rsquo;s slightly behind the head of the chain, an<br>index created by someone else&hellip;</td>
<td><a href="#use_init_all-to-get-all-index-chunks"><code>chifra init --all</code></a></td>
</tr>
<tr>
<td>have a locally-running node and wish to build<br>the index yourself&hellip;</td>
<td>two to three days setup time and running your own<br>local node (such as dAppnode)&hellip;.</td>
<td><a href="#use-scrape-to-build-your-own-index"><code>chifra scrape</code></a></td>
</tr>
</tbody>
</table>
<h2 id="getting-the-index-without-running-a-node">Getting the index without running a node</h2>
<p>If you&rsquo;re not running your own node (or you don&rsquo;t feel like waiting), you can download all or part of a pre-built index from IPFS.</p>
<p>To do this, you have two options:</p>
<ul>
<li>run <code>chifra init</code> to download only the Bloom filters. Then, as you query individual addresses, TrueBlocks will download the much-larger index chunks (<em>faster now, slower later</em>)</li>
<li>run <code>chifra init --all</code> to download both the Bloom filters and the index chunks all at once (<em>slower now, faster later</em>)</li>
</ul>
<h3 id="use-chifra-init-to-get-a-subset-of-the-data">Use chifra init to get a subset of the data</h3>
<p>To get only the Bloom filters, run <code>chifra init</code>.</p>
<p>If you do this, you will have to periodically re-run the command to update your index. (<a href="#Supplementary-how-can-I-see-when-the-manifest-was-last-published">Read about the finding the latest manifest</a>).</p>
<p>For more information, see the <a href="/chifra/admin#chifra-init"><code>chifra init</code> command documentation</a>.</p>
<p><strong>Initial set up time</strong>: <code>chifra init</code> takes only about a half an hour on a machine with a good connection. (We&rsquo;ve had report from some users that it takes much longer, but we suspect they are on slow machines.) We highly prefer you have a capable machine.</p>
<p><strong>Storage use</strong>: In this scenario, since you only download the Bloom filters, the space required is about 1GB. Subsequently, as you download individual chunk, each chunk occupies about 25MB.</p>
<p>The number of index chunks you download depends entirely on the addresses you query. Of course, if you query a lightly used address, very few chunks will be downloaded. However, if you query are heavily used address, such as UniSwap, nearly every chunk will be downloaded. This is by design. In the later case, you would probably be better off using <code>chifra init --all</code> to begin with.</p>
<ul>
<li>For typical addresses (e.g. personal accounts), storage is somewhere between 50 to 500 MB</li>
<li>For more active addresses, storage may be as much as 1 or 2 GB</li>
<li>For very popular smart contracts, the storage requirement may be as high as 50 GB</li>
</ul>
<p><strong>How it works</strong></p>
<p>When you run <code>chifra init</code>, TrueBlocks downloads a set of Bloom filters from the latest published manifest to your local machine. Subsequently, when you want to explore an address history, e.g. with the command <code>chifra export &lt;address&gt;</code>, TrueBlocks:</p>
<ol>
<li>Scans the Bloom filters for potential matches and if there&rsquo;s a hit, downloads the corresponding index chunks.</li>
<li>Returns the set of <code>appearances</code> for the address as pairs of <code>&lt;block number&gt;</code> and <code>&lt;transaction_id&gt;</code>. (This permits direct queries for exact details of desired transaction histories).</li>
<li>Given the list of <code>appearances</code>, TrueBlocks pulls the full transactional history of the account from any (remote or local) RPC endpoint.</li>
<li>During the query, you may instruct TrueBlocks to cache the response locally, making future queries for this same address nearly instantaneous.</li>
</ol>
<h3 id="use-chifra-init---all-to-get-the-entirety-of-the-index">Use chifra init &ndash;all to get the entirety of the index</h3>
<p>To get the entirety of the appearance index, run <code>chifra init --all</code>.</p>
<p>If you use this command and don&rsquo;t run <code>chifra scrape</code>, you will have to update the index periodically by running the command again. (<a href="#Supplementary-how-can-I-see-when-the-manifest-was-last-published">Read about the finding the latest manifest</a>).</p>
<p>For detailed instructions, see the <a href="/chifra/admin#chifra-pins"><code>chifra pins</code> documentation</a>.</p>
<p><strong>Initial set up time</strong>: Somewhere between six and ten hours depending on the speed of your connection.</p>
<p><strong>Storage use</strong>: About 60GB-80GB</p>
<p><strong>How it works</strong></p>
<p>The initialization is very similar to the <code>init</code> process described in the previous section.</p>
<p>However, while <code>chifra init</code> downloads only the Bloom filters, downloading the index chunks only after a user queries for an address, <code>chifra init --all</code> <em>downloads all index chunks up front</em>.</p>
<p>While this process takes much longer (perhaps hours), when you query a particular address in the future, TrueBlocks no longer has to download anything.
Therefore, the query is significantly faster.
In other words, the first time you run <code>chifra export &lt;transaction&gt;</code>, the process is much faster than it is if you initialize with <code>chifra init</code> alone.</p>
<p>As is true of the previous methods, if you enable caching, subsequent queries for the same address return almost instantly.</p>
<h2 id="use-chifra-scrape-to-build-your-own-index">Use chifra scrape to build your own index</h2>
<blockquote>
<p>👉 <strong>Note</strong>:
If you don&rsquo;t have a node with tracing or archiving, <code>scrape</code> exits by default.
You can still use scrape, but you need to
<a href="/docs/install/install-core#no-tracing">open your config and disable these checks</a></p></p>
</blockquote>
<p>To build your own index without any downloading, run <code>chifra scrape</code>.</p>
<p>For detailed instructions, see the <a href="/chifra/admin#chifra-scrape"><code>chifra scrape</code> command documentation</a>.</p>
<p><strong>Initial set up time</strong>: This method requires a locally-running tracing / archive node such as dAppNode running Erigon. Early users have reported 2-4 days to build the index from scratch. (You may wish to run <code>chifra scrape</code> in an application like <code>tmux</code>, so you can close the terminal window while it builds.)</p>
<p><strong>Storage use</strong>: About 60GB.</p>
<p><strong>How it works</strong>:</p>
<p>The end result of <code>chifa scrape</code> is the same as the end result of <code>chifra init --all</code>. However, the process is crucially different: rather than downloading the index that we publish (that is, trusting us), <code>chifra scrape</code> <em>builds the index on your local machine connecting only with your local-running RPC endpoint</em>, which means if you trust your own setup, you can trust the data.</p>
<p>(One note: It&rsquo;s possible to run against any RPC endpoint &ndash; remote or local &ndash; but because the TrueBlocks scraper hits the node continually and very aggressively, you will probably get rate-limited against a shared RPC server such as Infura.)</p>
<p>A good explanation of this whole process requires a long form article. For now, the curious may look at the best documentation available, the <code>src</code> directory of the source code.</p>
<h2 id="one-final-note-on-building--making-the-index">One final note on building / making the index</h2>
<p>You can, if you wish, mix and match the above methods.</p>
<p>For example, you can initially download only the Bloom filters with <code>chifra init</code> and then start up <code>chifra scrape</code> in the background. This would allow you to get started quickly but stay up to the front of the chain. Of course, as with everything, there&rsquo;s a tradeoff. You will be storing a few MB every time a new chunk is created (about three times a day). In return, it&rsquo;s way faster to query and the index stay up to the chain.</p>
<p>Alternatively, you may choose to scrape (i.e. build) the index yourself and share it with others by pinning it on IPFS. In this case, you&rsquo;re being a good citizen and making the whole ecosystem better off because you&rsquo;re sharing you index.</p>
<p>You can download the index (either with <code>chifra init</code> or <code>chifra init --all</code>) and pin that data (with the <code>--pin_locally</code> flag) as a way to share with the community, and then turn on the scraper. All options are available as a way to maximize the usefulness of the tool.</p>
<h2 id="supplementary-how-can-i-see-when-the-manifest-was-last-published">Supplementary: how can I see when the manifest was last published?</h2>
<p>To view the latest manifest published by TrueBlocks (note that there may be other publishers), pass our publisher id: <code>0xf503017d7baf7fbc0fff7492b751025c6a78179b</code> and the string <code>mainnet</code> to the <code>manifestHashMap()</code> method of the UnchainedIndex_V2 contract at https://etherscan.io/address/0x0c316b7042b419d07d343f2f4f5bd54ff731183d#readContract. This will return the <code>LATEST_IPFS_HASH</code> of the manifest. To fetch the manifest, use an IPFS client and <code>ipfs get &lt;LATEST_IPFS_HASH&gt;</code> or a gateway (such as the one TrueBlocks maintains) <code>https://ipfs.unchainedindex.io/ipfs/LATEST_IPFS_HASH</code>.</p>
<p>Edit the resulting file to see the latest published data.</p>
<p>Alternatively, you may always use <code>chifra chunks manifest</code> to see where the latest published index is at.</p>
`}).add({id:4,href:"https://trueblocks.io/docs/prologue/design-philosophy/",title:"Design philosophy",description:"The philosophy behind the technical design of TrueBlocks",content:`<h2 id="the-three-commandments">The three commandments</h2>
<ol>
<li>
<p><strong>Let users query this data without asking third-parties for permission.</strong></p>
<p>If you can access blockchain data only through a third party (e.g. a cloud provider),
is the data really decentralized?</p>
</li>
<li>
<p><strong>Provide accurate access, to underived, consented-to, pure immutable data.</strong></p>
<p>If the blockchain data is not accurate, what good is the blockchain?</p>
</li>
<li>
<p><strong>Perform well on small machines</strong></p>
<p>If an application requires web-scale computer infrastructure,
does it really support decentralization?</p>
</li>
</ol>
<h2 id="how-trueblocks-prioritizes-design-features">How TrueBlocks prioritizes design features</h2>
<p>No application can do all things. All design decisions involve tradeoffs.
TrueBlocks tries to make trade off <em>consciously</em>, so that we always
make the application best serve our core values.</p>
<h3 id="core-design-values">Core design values</h3>
<p>These core design features are <em>imperative</em>.
They underlie every single commit made to the TrueBlocks code base.</p>
<table>
<thead>
<tr>
<th>Core design values</th>
<th>What they mean in practice matter</th>
</tr>
</thead>
<tbody>
<tr>
<td>Decentralization</td>
<td>No one should have to rely on anyone other than themselves for data. This including users who want data at the very end of the data journey</td>
</tr>
<tr>
<td>Performance</td>
<td>TrueBlocks should be fast on small machines, and provide options for minimal disc footprints</td>
</tr>
<tr>
<td>Preserves integrity of data</td>
<td>Blockchain data is mutually-agreed upon and consented-to. Don&rsquo;t tamper with it.</td>
</tr>
</tbody>
</table>
<h3 id="very-important-values">Very important values</h3>
<p>These values are particularly important. They are naturally necessary to achieving
the core design features.</p>
<table>
<thead>
<tr>
<th>Very important values</th>
<th>What they mean in practice</th>
</tr>
</thead>
<tbody>
<tr>
<td>Transparency</td>
<td>Every person gets permissionless access to all the data they want; the application should be open source, letting users verify the data</td>
</tr>
<tr>
<td>Reproducibility</td>
<td>Required for transparency and decentralization</td>
</tr>
<tr>
<td>Stability</td>
<td>It should run forever with zero downtime</td>
</tr>
</tbody>
</table>
<h3 id="important-values">Important values</h3>
<p>These values are important, and TrueBlocks tries to maximize these values wherever possible.
However, if we have to make a tradeoff, these values come after the core values.</p>
<table>
<thead>
<tr>
<th>Important values</th>
<th>What they mean in practice</th>
</tr>
</thead>
<tbody>
<tr>
<td>Robustness</td>
<td>App should work forever without needing to be futzed with</td>
</tr>
<tr>
<td>Approachability</td>
<td>Easy to understand how it works; easy to understand how to get started</td>
</tr>
<tr>
<td>Simplicity</td>
<td>Related to Approachability</td>
</tr>
<tr>
<td>Extensibility</td>
<td>Others should be able to add to it</td>
</tr>
<tr>
<td>Maintainability</td>
<td>Ideally requires no maintenance</td>
</tr>
<tr>
<td>Debuggability</td>
<td>An internal concern</td>
</tr>
</tbody>
</table>
<h3 id="not-priorities">Not priorities</h3>
<p>While TrueBlocks does not <em>try</em> to sacrifice these values, they are not core concerns.</p>
<table>
<thead>
<tr>
<th>Not a priority</th>
<th>Why these values aren&rsquo;t emphasized</th>
</tr>
</thead>
<tbody>
<tr>
<td>Compatibility</td>
<td>Depends on programming languages that we use, so not a concern</td>
</tr>
<tr>
<td>Composability</td>
<td>Not really a concern</td>
</tr>
<tr>
<td>Expressiveness</td>
<td>Not a concern, readable commands more important</td>
</tr>
<tr>
<td>Interoperability</td>
<td>Only care about data being platform-independent. Production of the index needs to create something that is useful outside of TrueBlocks</td>
</tr>
<tr>
<td>Mensurability</td>
<td>For internal use only, so less of a concern</td>
</tr>
<tr>
<td>Portability</td>
<td>Depends on programming language, so not a concern</td>
</tr>
<tr>
<td>Safety</td>
<td>Not really. Consented to data is safe.</td>
</tr>
<tr>
<td>Security</td>
<td>Not really. Out of our code&rsquo;s purview other than basic software security. We hold no special data: our data is consented-to data. Reproducible, consented-to data is reproducibly safe. The app runs on local machines. If the local machine is compromised, TrueBlocks is not the user&rsquo;s biggest security concern.</td>
</tr>
<tr>
<td>Thoroughness</td>
<td>The application should do one thing perfectly &ndash; reconciliations</td>
</tr>
</tbody>
</table>
<p><em>This ranking of values was inspired by <a href="https://www.youtube.com/watch?v=2wZ1pCpJUIM">a talk given by Bryan Cantrill in 2018</a>.</em></p>
<h2 id="mantras-for-decentralized-data">Mantras for decentralized data</h2>
<p>Because &ldquo;commandments&rdquo; sounds authoritarian and Abrahamic, we also keep an ongoing list of mantras.</p>
<p>If repeated endlessly, they will eventually sink in:</p>
<ul>
<li>All the data, for all the people, all the time, but no data if the user doesn’t want it</li>
<li>Use only consented-to data…
<ul>
<li>If you can’t do that, use only data derived directly from consented-to data</li>
<li>If you can’t do that, find a way to force the data provider to prove their data</li>
</ul>
</li>
<li>The paradigm has shifted, embrace it - the server is now called localhost</li>
<li>Break yourself out of the browser. There’s a big wide desktop out there</li>
<li>It’s easier to scale up than to scale down - decentralize first</li>
<li>Most users care only about themselves and maybe a few smart contracts</li>
<li>Some users, but not all, care about everything</li>
<li>Everyone needs to do accounting and pay taxes</li>
<li>The node can, and should be, be improved</li>
</ul>
`}).add({id:5,href:"https://trueblocks.io/docs/install/install-explorer/",title:"Install explorer",description:"Explorer is the GUI frontend for TrueBlocks ",content:`<p>First, make sure that you have the <code>chifra-core</code> backend up and running,
then run the application from <a href="https://github.com/TrueBlocks/trueblocks-explorer">a clone of the explorer repo</a>.</p>
<h2 id="before-you-begin">Before you begin</h2>
<p>☑ Set up the trueblocks backend using the <a href="/docs/install/install-core">chifra installation instructions</a></p>
<p>☑ In a terminal window, run the command <code>chifra serve</code></p>
<h2 id="install">Install</h2>
<p>Keep the <code>chifra serve</code> process running.</p>
<p>Then, in a new terminal, run these commands:</p>
<ol>
<li>git clone git@github.com:TrueBlocks/trueblocks-explorer.git</li>
<li>cd trueblocks-explorer</li>
<li>cp .env.example .env</li>
<li>yarn</li>
<li>yarn develop</li>
</ol>
<p>Open your browser, and access the app from <code>localhost:1234</code>.</p>
`}).add({id:6,href:"https://trueblocks.io/docs/prologue/do-i-need-a-node/",title:"Do I need a node?",description:"A node is not required, but that's the only way use Trueblocks as it is intended.",content:`<p>And if you are running your own node, TrueBlocks works best with Erigon.</p>
<hr>
<h2 id="why-having-a-node-is-the-best-option">Why having a node is the best option</h2>
<p>Some benefits of TrueBlocks can be realized only when a user has their own node.
Having a node lets users:</p>
<ul>
<li>Limit queries to the node on their machine</li>
<li>Use the node to build a local index</li>
<li>Query data directly from the top of the chain</li>
</ul>
<p>Setting up a node is not as hard as many people think, but it does require two TBs of storage
and some good hardware.</p>
<p>If you want to build your own index, plan for a few days and run <code>chifra scrape</code>.
Before doing so, you probably want to read the relevant section in the
<a href="/docs/install/build-unchained-index">&ldquo;How Can I Get the Index&rdquo;</a> article,
and <a href="/chifra/admin#chifra-scrape">the <code>scrape</code> command documentation</a>.</p>
<p>Fortunately, TrueBlocks also publishes the index on the IPFS,
which lets you access it locally without running a node.</p>
<h2 id="without-a-node-you-can-download-the-index-from-the-ipfs">Without a node, you can download the index from the IPFS</h2>
<p>Downloading the IPFS manifest is a good option for many users:</p>
<ul>
<li>The initial time to get started is much faster</li>
<li>The index occupies only the space you need, (between 1 and 80GB)</li>
<li>You can verify its correctness with the TrueBlocks source code</li>
<li>You can own the index on your local machine (though you still need to query remote RPCs for transaction data).</li>
</ul>
<p>There are two commands to download the index, <code>chifra init</code> and <code>chifra pins</code>.
The pros and cons of each approach are outlined in the
<a href="/docs/install/build-unchained-index">&ldquo;How Can I Get the Index?&rdquo;</a> article.</p>
<h3 id="drawbacks-of-using-the-ipfs-manifest">Drawbacks of using the IPFS manifest</h3>
<p>The drawbacks of using the IPFS manifest are the opposite of the benefits
of building an index from your own node:</p>
<ul>
<li>You still must query transaction data from remote RPCs</li>
<li>You must trust the data TrueBlocks publishes (though you can verify the build)</li>
<li>You can only query up to the last time TrueBlocks published the manifest</li>
</ul>
`}).add({id:7,href:"https://trueblocks.io/docs/prologue/multi-chain/",title:"Multi chain",description:"Instructions for accessing multiple chains from chifra",content:`<h2 id="accessing-multiple-chains">Accessing multiple chains</h2>
<p>As of version 0.25.0-alpha, TrueBlocks supports accessing data from any EVM-based blockchain that supports the requisite RPC endpoints. This includes most blockchains we know of.</p>
<p>In order to use this new feature, you have to do almost nothing. All you have to do is add <code>--chain &lt;chainname&gt;</code> to any chifra command (except one or two as detailed below).</p>
<p>For example:</p>
<table>
<thead>
<tr>
<th>Command</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>chifra blocks 12</td>
<td>Default chain is mainnet</td>
</tr>
<tr>
<td>chifra blocks 12 &ndash;chain mainnet</td>
<td>Same as default</td>
</tr>
<tr>
<td>chifra blocks 12 &ndash;chain gnosis</td>
<td>Block 12 from gnosis chain</td>
</tr>
</tbody>
</table>
<h2 id="how-can-this-possibly-work">How can this possibly work?</h2>
<p>To be perfectly honest, it can&rsquo;t &ndash; without you.</p>
<p>You must be running your own RPC endpoints. We built TrueBlocks in this way on purpose &ndash; TrueBlocks is not a service. It&rsquo;s a locally running tool. We did this because doing otherwise promotes a world of highly centralized solutions&ndash;something we are trying very hard to avoid.</p>
<p>Once you do start to run your own node software, you will be very glad you did. While you can use publicly available endpoints such as Infura, you will find that you will almost certainly be rate-limited. This is not true if you run your own node.</p>
<h2 id="support-for-default-chains">Support for default chains</h2>
<p>Notwithstanding the above, we&rsquo;ve provided default configurations for the following eight (8) EVM compatible chains:</p>
<pre><code>mainnet, rinkeby, ropsten, goerli, kovan,
gnosis, optimism, polygon
</code></pre>
<p>In each case (except <code>mainnet</code>) we point to public RPC endpoints. It is likely that you will be rate-limited if you use these options. Providing your own endpoints is much preferred.</p>
<h2 id="the-default-chain">The Default Chain</h2>
<p>A new configuration item has been added to the <code>trueBlocks.toml</code> file under the <code>[settings]</code> section. That item is called <code>defaultChain</code>. The initial value is <code>mainnet</code>. After installing version 0.25.0-alpha any <code>chifra</code> command that is run without the <code>--chain</code> option will default to <code>defaultChain</code>. You may modify this and subsequently remove the <code>--chain</code> option if you wish to default to a different chain.</p>
<h2 id="adding-your-own-chain">Adding your own chain</h2>
<p>To configure a chain or add a new one, you must edit an entry for the <code>chains</code> array in the <code>trueBlocks.toml</code> file.</p>
<p>Once added, you may use your new chain entry by naming it to the <code>--chain</code> option:</p>
<pre><code>chifra &lt;cmd&gt; &lt;options&gt; --chain &lt;chain-name&gt;
</code></pre>
<p>Below is one of the pre-configured sections for Ethereum Mainnet. Following that is a description of fields making up a chain configuration. Note that the section header of the chain must start with <code>chains.</code> and becomes the name of the chain.</p>
<pre><code>[chains.mainnet]
chainId = &quot;1&quot;
rpcProvider = &quot;http://localhost:8545&quot;
remoteExplorer = &quot;https://etherscan.io&quot;
apiProvider = &quot;http://localhost:8080&quot;
localExplorer = &quot;http://localhost:1234&quot;
pinGateway = &quot;https://ipfs.unchainedindex.io/ipfs/&quot;
symbol = &quot;ETH&quot;
</code></pre>
<p>Your entry must contain the following fields (some of which are optional):</p>
<table>
<thead>
<tr>
<th>Field Name</th>
<th>required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>chainId</td>
<td>yes</td>
<td>The chain id as returned by <code>eth_chainId</code></td>
</tr>
<tr>
<td>rpcProvider</td>
<td>yes</td>
<td>The RPC provider for the chain. Highly preferred this is local and dedicated.</td>
</tr>
<tr>
<td>remoteExplorer</td>
<td></td>
<td>A remote blockchain explorer for the chain (such as EtherScan). Used by <code>chifra explore</code></td>
</tr>
<tr>
<td>pinGateway</td>
<td></td>
<td>Only needed if you are running <code>chifra scrape --pin</code>. Note you will need your own Pinata endpoint.</td>
</tr>
</tbody>
</table>
<p>The following three fields are only needed if you&rsquo;re also running the TrueBlocks Explorer:</p>
<table>
<thead>
<tr>
<th>Field Name</th>
<th>required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>apiProvider</td>
<td></td>
<td>The URL given by <code>chifra serve</code> and where the explorer will get its data.</td>
</tr>
<tr>
<td>localExplorer</td>
<td></td>
<td>The URL of the local explorer application. Where <code>chifra explore --local</code> will open.</td>
</tr>
<tr>
<td>symbol</td>
<td></td>
<td>The symbol of the native token on the chain in question. <code>ETH</code> for mainnet, <code>xDAI</code> for <code>gnosis</code> for example.</td>
</tr>
</tbody>
</table>
<h2 id="what-doesnt-work">What Doesn&rsquo;t Work?</h2>
<p>There are two things that currently do not work with Multi-Chain:</p>
<ol>
<li>
<p>The command <code>chifra init</code> only works with Ethereum Mainnet. While we will never provide an index for every chain (we must rely on our user base to do that and hopefully share it), we will, in the future be supporting some chains, notably the gnosis chain.</p>
</li>
<li>
<p>Pricing using UniSwap only works on the mainnet. In the future, once more standardization appears relative to pricing on multiple chains, this choice will be revisited.</p>
</li>
</ol>
`}).add({id:8,href:"https://trueblocks.io/docs/install/install-troubleshooting/",title:"Troubleshooting",description:"Solutions to Common Problems",content:`<p>This section lists solutions to problems some users have run into with the installation. If you continue to have trouble, <a href="https://github.com/TrueBlocks/trueblocks-core/issues">create an issue</a>, or ask us on discord.</p>
<h2 id="dependencies">Dependencies</h2>
<h3 id="installing-go">Installing go</h3>
<h4 id="how-do-i-check-my-go-version">How do I check my Go version?</h4>
<p>Run this command</p>
<pre><code class="language-shell">go version
</code></pre>
<p>TrueBlocks needs version 1.16.x or later. If you to install or update Go, <a href="https://golang.org/doc/install">see here</a>.</p>
<h3 id="installing-build-tools">Installing build tools</h3>
<h4 id="how-do-i-install-the-build-packages-for-my-system">How do I install the build packages for my system?</h4>
<p><strong>Linux:</strong> <code>sudo apt install build-essential git cmake ninja-build python3 python3-dev libcurl4-openssl-dev clang-format jq</code></p>
<p><strong>Mac:</strong> <code>brew install cmake ninja git clang-format jq</code></p>
<h2 id="building-trueblocks">Building TrueBlocks</h2>
<h3 id="did-it-work">Did it work?</h3>
<h4 id="how-do-i-know-if-compilation-worked">How do I know if compilation worked?</h4>
<p>From the <code>./trueblocks-core/build</code> folder, test your installation with this command:</p>
<pre><code class="language-shell">../bin/chifra version
</code></pre>
<p>You should get a version string similar to this:</p>
<pre><code class="language-shell">trueBlocks GHC-TrueBlocks//0.9.0-alpha-409aa9388-20210503
</code></pre>
<p>If nothing outputs, your installation or the build has failed. Try repeating the installation instructions. If it still fails, make an issue or join our discord.</p>
<h3 id="exporting-your-path">Exporting your PATH</h3>
<h4 id="how-do-i-export-my-path">How do I export my PATH?</h4>
<p><code>chifra</code> only works if its underlying tools are found in your <code>$PATH.</code>
To find the full path, run this from the top of the <code>trueblocks-core</code> directory.</p>
<pre><code class="language-shell">cd bin &amp;&amp; pwd &amp;&amp; cd -
</code></pre>
<p>Add the result of that command to your shell’s <code>$PATH</code>.</p>
<p>How you do that depends on your system.
In Bash, you&rsquo;re probably going to put something like this in your <code>.bashrc</code>:</p>
<pre><code class="language-shell">export PATH=\${PATH}:&lt;/path/to/trueblocks-core/directory&gt;/bin
</code></pre>
<p>If you are confused, a Google search may be in order…</p>
<h3 id="number-of-cores">Number of cores</h3>
<h4 id="how-many-cores-can-i-use-to-make-trueblocks">How many cores can I use to make TrueBlocks?</h4>
<p>When you run <code>make</code>, you can speed up the build by parallelizing with</p>
<pre><code class="language-shell">make -j &lt;ncores&gt;
</code></pre>
<p>Where <code>&lt;ncores&gt;</code> represents the number of cores to devote to the job.
How many cores can you use? That depends on many factors. A handy tool is <code>nproc</code>,
which identifies the machine&rsquo;s number of available processing units.</p>
<p>If you have <code>nproc</code> installed, you can safely parallelize the build with this command</p>
<pre><code class="language-shell">make -j \`nproc\`
</code></pre>
<h2 id="configuration">Configuration</h2>
<h3 id="where">Where?</h3>
<h4 id="where-are-the-configuration-files">Where are the configuration files?</h4>
<p>Where your configuration folder is depends on your operating system
and environment.</p>
<ul>
<li>If <code>XDG_CONFIG_HOME</code> is set, your configuration is there</li>
<li>Otherwise, on Linux: <code>~/.local/share/trueblocks</code></li>
<li>Otherwise, on Mac: <code>~/Library/Application Support/TrueBlocks</code></li>
<li>Otherwise, you&rsquo;re out of luck&ndash;we only support Linux and Mac</li>
</ul>
<p>The primary or base configuration file (<code>trueBlocks.toml</code>) must exist at one
of the above locations for <code>chifra</code> to work.</p>
<p>With the recent addition of support for multi-chain, there has arisen the need
for per-chain configuration as well (for example, values such as <code>rpcProvider</code> or
<code>remoteExplorer</code> are unique per chain).</p>
<p>This issue is discussed here <a href="#">TODO: PLACE_HOLDER</a>.</p>
<h3 id="rpc-endpoint">RPC endpoint</h3>
<h4 id="how-do-i-specify-an-rpc-endpoint">How do I specify an RPC endpoint?</h4>
<p>By default, TrueBlocks looks for the RPC at <code>http://localhost:8545/</code>.</p>
<p>If you are using a remote RPC such as Infura or your own local RPC at
a different port, you will need to modify that value.</p>
<p>As is true of all configuration values, you coudl use an environment
variable as described above, but you may also edit <code>trueBlocks.toml</code>.</p>
<p>The format of that file is documented <a href="#">TODO: PLACE_HOLDER</a>.</p>
<h3 id="api-keys">API keys</h3>
<h4 id="how-do-i-add-a-etherscan-key">How do I add a EtherScan key?</h4>
<p>Some small part of TrueBlocks requires an EtherScan API key. In particular
this is the <a href="/chifra/chaindata/"><code>--articulate</code> option</a>. We are working
hard to remove this centralized dependency, but in the mean time you
may get a warning of a missing key.</p>
<p>Here’s an example of a remote RPC for Infura and an EtherScan API key.
<em><strong>Warning: see the note below</strong></em></p>
<pre><code class="language-TOML">[settings]
default_chain=mainnet
etherscan_key = &quot;&lt;key_value&gt;&quot;

[mainnet]
rpcProvider = &quot;https://mainnet.infura.io/v3/&lt;key_value&gt;&quot;
</code></pre>
<p><em><strong>Note:</strong></em> Until mutli-chain is fully supported, put the <code>rpcProvider</code> value
in the <code>[settings]</code> group.</p>
<p><em><strong>Note:</strong></em> The EtherScan key is not <em>per-chain</em>.</p>
<h3 id="do-i-need-the-index">Do I need the index?</h3>
<h4 id="why-do-i-need-the-index-of-appearances">Why do I need the index of appearances?</h4>
<p>If you&rsquo;re only querying basic block or transaction data, you don&rsquo;t really
need the index of appearances.</p>
<p>However, most of our users with to explore the entire history of their own
addresses. If you wish to do that, you will need the index.</p>
<p>There are multiple options for getting the index, which the
<a href="/docs/install/build-unchained-index">How Can I Get the Index?</a> article covers
in more detail.</p>
<p>No matter which method you use, downloading or creating the index will take
somewhere between a few minutes and a day or two. So you might want to play
around with some <a href="/chifra/chaindata">chifra blockchain commands</a> first.</p>
<h3 id="archive-nodes">Archive nodes</h3>
<h4 id="no-tracing">What if my node doesn&rsquo;t have tracing or archiving?</h4>
<p>If the node you&rsquo;re running does not support OpenEthereum style tracing or it
is not an archive node, you may get an error telling you such.</p>
<p>Something like</p>
<blockquote>
<p><code> --accounting requires historical balances. The RPC server does not have them. Quitting...</code></p>
</blockquote>
<p>You may disable this warning by editing a configuration file. Find the file
called <code>blockScrape.toml</code> in your configuration folder (in a multi-chain environment
this will be in the chain-specific config file, otherwise at the top level).</p>
<p>Add the following setting to the file (which you may create if it doesn&rsquo;t exist):</p>
<pre><code class="language-toml">[requires]
tracing = false
archive = false
</code></pre>
`}).add({id:9,href:"https://trueblocks.io/docs/prologue/",title:"Prologue",description:"Prologue Doks.",content:""}),userinput.addEventListener("input",n,!0),suggestions.addEventListener("click",s,!0);function n(){var n,r=this.value,o=e.search(r,{limit:5,index:["content"],enrich:!0}),i=suggestions.childNodes,s=0,c=o.length;for(suggestions.classList.remove("d-none"),o.forEach(function(e){n=document.createElement("div"),n.innerHTML="<a href><span></span><span></span></a>",a=n.querySelector("a"),t=n.querySelector("span:first-child"),d=n.querySelector("span:nth-child(2)"),a.href=e.result[s].doc.href,t.textContent=e.result[s].doc.title,d.textContent=e.result[s].doc.description,suggestions.appendChild(n)});i.length>c;)suggestions.removeChild(i[s])}function s(){for(;suggestions.lastChild;)suggestions.removeChild(suggestions.lastChild);return!1}})()