<script setup>
const activeTab = ref("organisations");

const systems = [
  {
    id: "organisations",
    num: "01",
    label: "Organisations",
    title: "Flow OS",
    subtitle: "Internal Operations & Paperless Sign-offs",
    icon: "material-symbols:account-tree-outline-rounded",
  },
  {
    id: "communities",
    num: "02",
    label: "Communities",
    title: "TownsRegistry",
    subtitle: "Member Directory & Dues Transparency",
    icon: "material-symbols:groups-outline-rounded",
  },
  {
    id: "businesses",
    num: "03",
    label: "Businesses",
    title: "ApexPay Engine",
    subtitle: "Multi-Channel Commerce & Auto-Reconciliation",
    icon: "material-symbols:payments-outline-rounded",
  },
  {
    id: "people",
    num: "04",
    label: "People",
    title: "Citizen Portal",
    subtitle: "Lightweight, Offline-First Public Tools",
    icon: "material-symbols:devices-rounded",
  },
];

// Interactive demo state for each system
const isApproved = ref(true);
const isMemberVerified = ref(true);
const txnStatus = ref("Settled");
const isSyncing = ref(false);

const toggleApproval = () => {
  isApproved.value = !isApproved.value;
};

const toggleMember = () => {
  isMemberVerified.value = !isMemberVerified.value;
};

const simulateTxn = () => {
  txnStatus.value = "Processing...";
  setTimeout(() => {
    txnStatus.value = "Settled";
  }, 600);
};

const triggerSync = () => {
  isSyncing.value = true;
  setTimeout(() => {
    isSyncing.value = false;
  }, 900);
};
</script>

<template>
  <section class="relative bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80 overflow-hidden">
    <!-- Blueprint Coordinate Crosshairs & Fine Grid -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-80"></div>

    <UContainer class="relative">

      <!-- Main Asymmetric Grid: Story & Intent (Left) + Interactive Live Canvas (Right) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <!-- Left Column: Editorial & Value Proposition -->
        <div class="lg:col-span-6 flex flex-col justify-center pt-2">
          <!-- Tag -->
          <div class="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-orange-600 mb-4">
            <span class="px-2 py-0.5 rounded border border-orange-500/30 bg-orange-50 text-orange-700">
              Purpose-Built Software
            </span>
            <span>Zero Bloat &middot; Real Impact</span>
          </div>

          <!-- Headline -->
          <h1 class="text-3xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-slate-950 leading-[1.08]">
            Software engineered for <span class="text-orange-500">people, organisations</span> & communities.
          </h1>

          <!-- Lead Body -->
          <p class="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            We replace paper bottlenecks, messy WhatsApp threads, and fragmented spreadsheets with clear, resilient digital platforms. Built locally in Abuja for institutions, enterprises, and everyday citizens.
          </p>

          <!-- Action Bar -->
          <div class="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center font-bold rounded-xl px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-slate-950 transition-all text-sm shadow-xs"
            >
              Start a Project Brief
              <Icon name="material-symbols:arrow-forward-rounded" class="w-4 h-4 ml-1.5" />
            </NuxtLink>

            <NuxtLink
              to="/work"
              class="inline-flex items-center justify-center font-semibold rounded-xl px-6 py-3.5 border border-slate-300 hover:border-slate-400 bg-white text-slate-800 transition-all text-sm"
            >
              View Delivered Systems
            </NuxtLink>
          </div>

          <!-- Bottom Assurance Ticker -->
          <div class="mt-10 pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-xs">
            <div>
              <span class="block font-bold text-slate-900 font-mono">100%</span>
              <span class="text-slate-500 text-[11px] leading-tight">Code & data ownership</span>
            </div>
            <div>
              <span class="block font-bold text-slate-900 font-mono">2-4 Wks</span>
              <span class="text-slate-500 text-[11px] leading-tight">Rapid core deployment</span>
            </div>
            <div>
              <span class="block font-bold text-slate-900 font-mono">Abuja NG</span>
              <span class="text-slate-500 text-[11px] leading-tight">Direct in-person & 24/7 care</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Interactive System Architecture Canvas -->
        <div class="lg:col-span-6">
          <div class="rounded-2xl border border-slate-200 bg-slate-900 text-white shadow-xl overflow-hidden">
            <!-- Canvas Header Strip -->
            <div class="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950">
              <div class="flex items-center gap-2">
                <span class="h-2.5 w-2.5 rounded-full bg-slate-700"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-slate-700"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-slate-700"></span>
                <span class="font-mono text-xs text-slate-400 ml-2">townsmeet://workbench/live-preview</span>
              </div>
              <div class="flex items-center gap-2 font-mono text-[11px] text-emerald-400">
                <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                INTERACTIVE DEMO
              </div>
            </div>

            <!-- Audience Selector Tabs -->
            <div class="grid grid-cols-4 border-b border-slate-800 bg-slate-950/60 font-mono text-xs">
              <button
                v-for="s in systems"
                :key="s.id"
                @click="activeTab = s.id"
                class="py-3 px-2 text-center transition-all border-b-2 flex flex-col items-center gap-1 cursor-pointer"
                :class="activeTab === s.id
                  ? 'border-orange-500 text-orange-400 bg-slate-900'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'"
              >
                <span class="text-[10px] text-slate-500 font-bold">[{{ s.num }}]</span>
                <span class="font-semibold truncate max-w-full">{{ s.label }}</span>
              </button>
            </div>

            <!-- Interactive Display Area -->
            <div class="p-6 bg-slate-900">
              <!-- 1. Organisations Tab -->
              <div v-if="activeTab === 'organisations'" class="space-y-4">
                <div class="flex items-start justify-between">
                  <div>
                    <span class="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold">
                      Flow OS &middot; Internal Workflow Engine
                    </span>
                    <h3 class="text-lg font-bold text-white mt-0.5">Procurement & Document Approval</h3>
                    <p class="text-xs text-slate-400 mt-1">Replacing paper sign-off sheets with digital verifiable stamps.</p>
                  </div>
                  <span class="rounded bg-slate-800 px-2.5 py-1 text-[11px] font-mono text-slate-300">
                    REQ-8902
                  </span>
                </div>

                <!-- Pipeline Stages -->
                <div class="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                  <div class="flex items-center justify-between text-xs font-mono">
                    <span class="text-slate-400">Initiator:</span>
                    <span class="text-slate-200">Abuja Operations Desk</span>
                  </div>
                  <div class="flex items-center justify-between text-xs font-mono">
                    <span class="text-slate-400">Department Review:</span>
                    <span class="text-emerald-400 font-semibold">&check; Verified (Zero discrepancies)</span>
                  </div>
                  <div class="flex items-center justify-between text-xs font-mono pt-2 border-t border-slate-800/80">
                    <span class="text-slate-400">Director Sign-Off:</span>
                    <span
                      class="px-2 py-0.5 rounded text-[11px] font-bold"
                      :class="isApproved ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-amber-950 text-amber-400 border border-amber-800'"
                    >
                      {{ isApproved ? 'Approved & Signed' : 'Pending Signature' }}
                    </span>
                  </div>
                </div>

                <!-- Interactive Micro-Action -->
                <div class="flex items-center justify-between pt-1">
                  <button
                    @click="toggleApproval"
                    class="inline-flex items-center gap-2 rounded-lg bg-slate-800 hover:bg-slate-700 px-3.5 py-2 text-xs font-semibold text-white transition-all cursor-pointer"
                  >
                    <Icon name="material-symbols:touch-app-outline-rounded" class="w-4 h-4 text-orange-400" />
                    <span>{{ isApproved ? 'Click to Revert Status' : 'Click to Approve Request' }}</span>
                  </button>
                  <span class="text-[11px] font-mono text-slate-400">
                    Audit log: Immutable &middot; 0.12s
                  </span>
                </div>
              </div>

              <!-- 2. Communities Tab -->
              <div v-if="activeTab === 'communities'" class="space-y-4">
                <div class="flex items-start justify-between">
                  <div>
                    <span class="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold">
                      TownsRegistry &middot; Civic & Union Portal
                    </span>
                    <h3 class="text-lg font-bold text-white mt-0.5">Resident Identity & Dues Verification</h3>
                    <p class="text-xs text-slate-400 mt-1">Direct WhatsApp notifications & instant digital receipts.</p>
                  </div>
                  <span class="rounded bg-slate-800 px-2.5 py-1 text-[11px] font-mono text-slate-300">
                    MEM-4109
                  </span>
                </div>

                <!-- Registry Card -->
                <div class="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                  <div class="flex items-center justify-between text-xs font-mono">
                    <span class="text-slate-400">Member:</span>
                    <span class="text-slate-200">Ibrahim Bello &middot; Zone 4 Chapter</span>
                  </div>
                  <div class="flex items-center justify-between text-xs font-mono">
                    <span class="text-slate-400">Dues (2026 Season):</span>
                    <span class="text-emerald-400 font-semibold">&#8358;25,000 &middot; Confirmed</span>
                  </div>
                  <div class="flex items-center justify-between text-xs font-mono pt-2 border-t border-slate-800/80">
                    <span class="text-slate-400">Membership Credential:</span>
                    <span
                      class="px-2 py-0.5 rounded text-[11px] font-bold"
                      :class="isMemberVerified ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-slate-800 text-slate-300 border border-slate-700'"
                    >
                      {{ isMemberVerified ? '&check; Verified Active Resident' : 'Under Review' }}
                    </span>
                  </div>
                </div>

                <!-- Interactive Micro-Action -->
                <div class="flex items-center justify-between pt-1">
                  <button
                    @click="toggleMember"
                    class="inline-flex items-center gap-2 rounded-lg bg-slate-800 hover:bg-slate-700 px-3.5 py-2 text-xs font-semibold text-white transition-all cursor-pointer"
                  >
                    <Icon name="material-symbols:badge-outline-rounded" class="w-4 h-4 text-orange-400" />
                    <span>{{ isMemberVerified ? 'Reset Member Status' : 'Issue Verified Digital Pass' }}</span>
                  </button>
                  <span class="text-[11px] font-mono text-slate-400">
                    SMS & WhatsApp: Synced
                  </span>
                </div>
              </div>

              <!-- 3. Businesses Tab -->
              <div v-if="activeTab === 'businesses'" class="space-y-4">
                <div class="flex items-start justify-between">
                  <div>
                    <span class="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold">
                      ApexPay Engine &middot; Commercial Infrastructure
                    </span>
                    <h3 class="text-lg font-bold text-white mt-0.5">Multi-Bank Settlement & Reconciliation</h3>
                    <p class="text-xs text-slate-400 mt-1">Zero lost transactions, instant split payouts.</p>
                  </div>
                  <span class="rounded bg-slate-800 px-2.5 py-1 text-[11px] font-mono text-slate-300">
                    TXN-7731
                  </span>
                </div>

                <!-- Payment Telemetry Card -->
                <div class="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                  <div class="flex items-center justify-between text-xs font-mono">
                    <span class="text-slate-400">Invoice Amount:</span>
                    <span class="text-slate-100 font-bold">&#8358;1,450,000.00</span>
                  </div>
                  <div class="flex items-center justify-between text-xs font-mono">
                    <span class="text-slate-400">Gateway Route:</span>
                    <span class="text-slate-300">Auto-Failover Bank Switch &middot; Latency 42ms</span>
                  </div>
                  <div class="flex items-center justify-between text-xs font-mono pt-2 border-t border-slate-800/80">
                    <span class="text-slate-400">Reconciliation:</span>
                    <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                      {{ txnStatus }} &middot; Ledger Balanced
                    </span>
                  </div>
                </div>

                <!-- Interactive Micro-Action -->
                <div class="flex items-center justify-between pt-1">
                  <button
                    @click="simulateTxn"
                    class="inline-flex items-center gap-2 rounded-lg bg-slate-800 hover:bg-slate-700 px-3.5 py-2 text-xs font-semibold text-white transition-all cursor-pointer"
                  >
                    <Icon name="material-symbols:refresh-rounded" class="w-4 h-4 text-orange-400" />
                    <span>Simulate Payment Ping</span>
                  </button>
                  <span class="text-[11px] font-mono text-slate-400">
                    Availability: 99.98%
                  </span>
                </div>
              </div>

              <!-- 4. People Tab -->
              <div v-if="activeTab === 'people'" class="space-y-4">
                <div class="flex items-start justify-between">
                  <div>
                    <span class="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold">
                      Citizen App &middot; Low-Bandwidth Architecture
                    </span>
                    <h3 class="text-lg font-bold text-white mt-0.5">Everyday Web & Offline-First Access</h3>
                    <p class="text-xs text-slate-400 mt-1">Ultra-light payload running smoothly even on patchy 2G/3G.</p>
                  </div>
                  <span class="rounded bg-slate-800 px-2.5 py-1 text-[11px] font-mono text-slate-300">
                    BUNDLE: 18KB
                  </span>
                </div>

                <!-- Client Metrics Card -->
                <div class="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                  <div class="flex items-center justify-between text-xs font-mono">
                    <span class="text-slate-400">Network State:</span>
                    <span class="text-slate-300">Offline-Ready &middot; Local IndexedDB Cache</span>
                  </div>
                  <div class="flex items-center justify-between text-xs font-mono">
                    <span class="text-slate-400">First Contentful Paint:</span>
                    <span class="text-emerald-400 font-semibold">0.42s on 3G mobile</span>
                  </div>
                  <div class="flex items-center justify-between text-xs font-mono pt-2 border-t border-slate-800/80">
                    <span class="text-slate-400">Background Sync:</span>
                    <span class="text-orange-400 font-mono text-[11px]">
                      {{ isSyncing ? 'Syncing 8 records in background...' : 'Idle &middot; All records synchronized' }}
                    </span>
                  </div>
                </div>

                <!-- Interactive Micro-Action -->
                <div class="flex items-center justify-between pt-1">
                  <button
                    @click="triggerSync"
                    class="inline-flex items-center gap-2 rounded-lg bg-slate-800 hover:bg-slate-700 px-3.5 py-2 text-xs font-semibold text-white transition-all cursor-pointer"
                  >
                    <Icon name="material-symbols:cloud-sync-outline-rounded" class="w-4 h-4 text-orange-400" />
                    <span>Simulate Offline Sync</span>
                  </button>
                  <span class="text-[11px] font-mono text-slate-400">
                    Zero Data Waste
                  </span>
                </div>
              </div>
            </div>

            <!-- Canvas Bottom Telemetry Bar -->
            <div class="flex items-center justify-between px-4 py-2.5 border-t border-slate-800 bg-slate-950 text-[11px] font-mono text-slate-500">
              <div class="flex items-center gap-3">
                <span>STACK: Nuxt 3 &middot; Nitro &middot; SQLite/Postgres</span>
              </div>
              <div class="flex items-center gap-2 text-slate-400">
                <span>HOSTED LOCALLY & SECURE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

