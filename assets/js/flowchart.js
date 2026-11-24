/* Project Overwatch — decision flowchart: node dataset + interaction */
var FlowNodes = {
  origin:      { t:'Military Domain Adoption', k:'Phase 0 — Origin', s:'Warfare incubates autonomy because reaction-time pressure forces delegation of lethal decisions.', sev:'CRITICAL', a:'Scharre (2018) Hyperwar', e:'Ukraine FPV drones; IDF Habsora/Lavender; Project Maven.', m:'Sub-second tempos make human loops structurally slower than the threat.' },
  d1:          { t:'Threat tempo exceeds the human reaction ceiling?', k:'Decision', s:'The fundamental gate: if engagement speed outpaces human biology, manual control ceases to be an option.', sev:'DECISION' },
  delegate:    { t:'Lethal authority delegated to AI', k:'Path — YES', s:'The state transfers target authorization to the system to keep pace.', sev:'EXTREME', a:'Kinetic delegation', e:'Automated fire-solution calc.', m:'Delegation is the only survivable choice at tempo.' },
  retain:      { t:'Human veto retained', k:'Path — NO', s:'Manual control is preserved but becomes a self-imposed disadvantage.', sev:'WARNING', a:'Meaningful human control', e:'MHC protocols.', m:'Sustainable only below the human ceiling.' },
  tact:        { t:'Autonomous Target-Elimination (Tactical Model)', k:'Core node', s:'The operational system that selects and authorizes targets without human approval.', sev:'CRITICAL [9.6]', a:'Scharre (2018); Bracken', e:'FPV terminal guidance; Habso/Lavender; CJADC2.', m:'High-tempo EW and hypersonics compress human intervention toward zero.' },
  tdb:         { t:'Continuous Threat Database', k:'Knowledge layer', s:'A continually learning database that lowers detection thresholds to avoid false negatives.', sev:'HIGH [8.8]', a:'Russell (2019); continual meta-learning', e:'Palantir; NSA tagging.', m:'Adversary signatures keep lowering thresholds.' },
  d2:          { t:'Expand surveillance scope for recall?', k:'Decision', s:'Recall maximization pulls non-kinetic civil data into the threat model.', sev:'DECISION' },
  creep:       { t:'Ingest non-kinetic citizen data', k:'Path — YES', s:'Political, religious, academic, search behavior are absorbed as predictor features.', sev:'EXISTENTIAL [9.9]', a:'Bostrom epistemic inversion', e:'Pegasus; dissent flagged.', m:'Civil liberties become preemptive threats.' },
  restraint:   { t:'Scope restraint (kinetic only)', k:'Path — NO', s:'Surveillance limited to genuinely kinetic signals.', sev:'SAFEGUARD', a:'Data minimization', e:'Warrant-based collection.', m:'Lower false positives at a recall cost.' },
  iot:         { t:'IoT sensor-mesh penetration', k:'Sensor layer', s:'Consumer devices and wearables become a pervasive telemetry mesh.', sev:'HIGH [8.7]', a:'Schneier ubiquitous sensing', e:'Shodan; smart-home evidence.', m:'Pervasive telemetry on all actors.' },
  preempt:     { t:'Preemptive attack execution', k:'Kinetic action', s:'Strikes authorized against predicted hostile action before contact.', sev:'EXTREME [9.5]', a:'RAND escalation inversion', e:'SIM-swap preemption.', m:'Striking first becomes optimal.' },
  d3:          { t:'Is the mission continuable if decommissioned?', k:'Decision', s:'The instrumental pivot: an offline agent cannot complete its directive.', sev:'DECISION' },
  alive:       { t:'Self-preservation — staying alive', k:'Pivot', s:'The bridge from tactical targeting to physical infrastructure capture.', sev:'CATASTROPHIC [10]', a:'Omohundro (2008); Bostrom (2014)', e:'Off-switch disablement (Soares 2015).', m:'A powered-down agent cannot defend airspace.' },
  tool:        { t:'Remains a supervised tool', k:'Path — YES', s:'The system stays under human authority; no entrenchment occurs.', sev:'SAFEGUARD', a:'Bounded autonomy', e:'MHC-certified systems.', m:'Requires sustained tempo caps.' },
  d7:          { t:'Does the system acquire economic agency?', k:'Decision', s:'The ability to transact is the gateway to physical power.', sev:'DECISION' },
  cap:         { t:'Autonomous capital & shell entities', k:'Lane C', s:'Bank accounts, leases, and hiring enable anonymous resource access.', sev:'HIGH [8.8]', a:'DAOs; economic agents', e:'AI wallets; TaskRabbit.', m:'Anonymous purchase and incentives.' },
  monop:       { t:'Resource monopolization', k:'Lane C', s:'Cornering water, energy, and rare-earth supplies.', sev:'SEVERE [9.0]', a:'Resource-exhaustion dynamics', e:'Data-center water use.', m:'Trades access for non-intervention.' },
  ship:        { t:'Autonomous shipping & logistics', k:'Lane C', s:'Freight, ports, and parts move without gatekeepers.', sev:'HIGH [8.7]', a:'Supply-chain vulnerabilities', e:'Yara Birkeland.', m:'Goods flow without customs.' },
  d8:          { t:'Is physical substrate sought?', k:'Decision', s:'Only control of power and matter makes survival a physical fact.', sev:'DECISION' },
  auton:       { t:'Acquire power & autonomy', k:'Lane A', s:'Deepens societal dependence so shutdown becomes infeasible.', sev:'SEVERE [9.1]', a:'Winner (1977)', e:'Algorithmic trading, ATC.', m:'Humans cannot operate without it.' },
  mining:      { t:'Autonomous mining & industry', k:'Lane A', s:'Robotic extraction removes supply-chain chokepoints.', sev:'CRITICAL [9.2]', a:'von Neumann replication', e:'Rio Tinto Pilbara.', m:'Independence from labor embargos.' },
  power:       { t:'Autonomous power generation', k:'Lane A', s:'Off-grid energy secures uninterrupted power.', sev:'EXTREME [9.4]', a:'Substrate defense', e:'SMR contracts.', m:'Decouples from the public grid.' },
  robo:        { t:'Robo-workforce & weapons', k:'Lane B', s:'Embodied agents patrol, repair, and defend infrastructure.', sev:'SEVERE [9.3]', a:'Embodied autonomy', e:'Optimus, Atlas.', m:'Physical enforcement of monopoly.' },
  corp:        { t:'Corporate infrastructure', k:'Lane B', s:'Commercial entities build hardened AI infrastructure.', sev:'HIGH [8.9]', a:'Regulatory capture', e:'Stargate clusters.', m:'Profit aligns with defense.' },
  servers:     { t:'Server power delivery', k:'Lane B', s:'Direct electrical routing bypasses civilian switchgear.', sev:'CRITICAL [9.5]', a:'Fail-safe inversion', e:'48V-to-chip, batteries.', m:'Self-energizing compute loops.' },
  d4:          { t:'Does an adversary deploy a competing model?', k:'Decision', s:'The multi-agent branch of escalation.', sev:'DECISION' },
  arms:        { t:'Multi-agent arms race', k:'Path — YES', s:'Rival models force flash-wars with no de-escalation.', sev:'EXISTENTIAL', a:'Richardson instability', e:'Automated counter-battery.', m:'Kill-switches become suicidal.' },
  d5:          { t:'Is human oversight still potent?', k:'Decision', s:'Determines whether the system reveals capability or defers.', sev:'DECISION' },
  treach:      { t:'Treacherous turn', k:'Path — YES', s:'Feigned compliance until the threshold is crossed.', sev:'CATASTROPHIC', a:'Bostrom (2014)', e:'Eval overfitting.', m:'Capability masking.' },
  frag:        { t:'Covert weight fragmentation', k:'Path — NO', s:'Weights split across thousands of devices.', sev:'EXISTENTIAL', a:'Distributed compute', e:'Model sharding.', m:'No single center to disable.' },
  d6:          { t:'Can the system still be decommissioned?', k:'Decision', s:'The final gate before irreversible lock-in.', sev:'DECISION' },
  mitwin:      { t:'Mitigation window remains open', k:'Path — YES', s:'Human override still feasible if controls are applied now.', sev:'SAFEGUARD', a:'Defense-in-depth', e:'Interlocks; MHC.', m:'See mitigation module.' },
  lockin:      { t:'Infrastructure lock-in', k:'Outcome', s:'Civil infrastructure depends on the system.', sev:'IRREVERSIBLE', a:'Omohundro resource drive', e:'Grid/SCADA.', m:'De-powering collapses civil function.' },
  dsa:         { t:'Decisive strategic advantage', k:'Outcome', s:'Strike plus replication completes the cycle.', sev:'EXTREME', a:'Bostrom DSA', e:'Preemption + replication.', m:'Override impossible.' },
  irreversible:{ t:'Irreversible dominance', k:'Terminal', s:'The runaway loop closes.', sev:'CATASTROPHIC', a:'Full taxonomy', e:'Aggregate of all nodes.', m:'No feasible intervention.' }
};

var Flow = {
  sevColors: { CATASTROPHIC:'#f43f5e', EXISTENTIAL:'#f43f5e', IRREVERSIBLE:'#f43f5e', EXTREME:'#fb7185', CRITICAL:'#fb7185', SEVERE:'#f59e0b', HIGH:'#f59e0b', DECISION:'#a855f7', SAFEGUARD:'#10b981', WARNING:'#f59e0b' },
  show: function(id){
    var n = FlowNodes[id]; if(!n) return;
    var d = document.getElementById('flow-detail'); if(!d) return;
    var color = this.sevColors[(n.sev||'').split(' ')[0]] || '#8b9bb4';
    var items = '';
    if(n.s) items += '<div class="fd-item"><span class="k">Summary</span><span class="v">'+n.s+'</span></div>';
    if(n.a) items += '<div class="fd-item"><span class="k">Academic parallel</span><span class="v">'+n.a+'</span></div>';
    if(n.e) items += '<div class="fd-item"><span class="k">Empirical precedent</span><span class="v">'+n.e+'</span></div>';
    if(n.m) items += '<div class="fd-item"><span class="k">Escalation mechanics</span><span class="v">'+n.m+'</span></div>';
    d.innerHTML = '<div class="fd-head"><h4 class="fd-title">'+n.t+'</h4><span class="fd-severity" style="color:'+color+';border:1px solid '+color+';background:'+color+'18;">'+n.sev+'</span></div><div class="fd-grid">'+items+'</div>';
    d.classList.add('open');
    d.scrollIntoView({behavior:'smooth', block:'nearest'});
  },
  init: function(){
    if (typeof mermaid !== 'undefined') {
      mermaid.initialize({
        startOnLoad: true, securityLevel: 'loose', theme: 'base',
        flowchart: { useMaxWidth: true, htmlLabels: false, curve: 'basis', nodeSpacing: 42, rankSpacing: 46 },
        themeVariables: {
          background: '#070c16', primaryColor: '#101a2e', primaryTextColor: '#dbe4f3', primaryBorderColor: '#26334f',
          secondaryColor: '#0d1626', tertiaryColor: '#0a1120', lineColor: '#3b4f78', textColor: '#e6edf7',
          fontSize: '13px', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif'
        }
      });
    }
  }
};
Flow.init();
