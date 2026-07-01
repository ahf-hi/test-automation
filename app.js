// ISO8583 Field Names lookup for the form builder
const ISO_FIELD_NAMES = {
  2: 'Primary Account Number (PAN)',
  3: 'Processing Code',
  4: 'Amount, Transaction',
  7: 'Transmission Date & Time',
  11: 'Systems Trace Audit Number (STAN)',
  12: 'Time, Local Transaction',
  13: 'Date, Local Transaction',
  14: 'Expiration Date',
  18: 'Merchant Type',
  22: 'Point of Service Entry Mode',
  24: 'Network International Identifier (NII)',
  25: 'Point of Service Condition Code',
  35: 'Track 2 Data',
  37: 'Retrieval Reference Number (RRN)',
  38: 'Authorization Identification Response',
  39: 'Response Code',
  41: 'Card Acceptor Terminal Identification (TID)',
  42: 'Card Acceptor Identification Code (MID)',
  43: 'Card Acceptor Name/Location',
  44: 'Additional Response Data',
  48: 'Additional Data - Private',
  49: 'Currency Code, Transaction',
  52: 'Personal Identification Number Data',
  60: 'Private Use (Terminal Data)',
  62: 'Private Use (STAN/Invoice)',
  70: 'Network Management Information Code',
  120: 'Record Data'
};

// Seed Test Cases for Browser-only (localStorage) Mode
const SEED_TEST_CASES = [
  {
    "id": "tc_iso_0200",
    "name": "POS Sale Request (0200)",
    "description": "ISO8583 Sale Request transaction sent to TCP POS Host.",
    "type": "iso8583",
    "host": "127.0.0.1",
    "port": 8583,
    "headerType": "binary",
    "bitmapType": "hex",
    "mti": "0200",
    "timeout": 5000,
    "fields": {
      "3": "000000",
      "4": "000000001500",
      "11": "000123",
      "22": "021",
      "41": "POS-8822",
      "42": "MERC-9922114422",
      "60": "Invoice10224"
    }
  },
  {
    "id": "tc_iso_0800",
    "name": "POS Network Signon (0800)",
    "description": "ISO8583 Network management sign-on message to keep the link active.",
    "type": "iso8583",
    "host": "127.0.0.1",
    "port": 8583,
    "headerType": "binary",
    "bitmapType": "hex",
    "mti": "0800",
    "timeout": 5000,
    "fields": {
      "11": "000124",
      "70": "301"
    }
  },
  {
    "id": "tc_paydee_sales",
    "name": "Paydee E-commerce Sales Payment",
    "description": "Automated Paydee Key Exchange and signed payment request.",
    "type": "http_post",
    "subtype": "paydee",
    "keyExchangeUrl": "https://devlinkv2.paydee.co/mpigw/mkReq",
    "paymentUrl": "https://devlinkv2.paydee.co/mpigw/mpReq",
    "autoGenerateTrxn": true,
    "timeout": 10000,
    "publicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq8j2SHHfzMLlhYppnlk-QqjjjZwMkhK6s6rERd0JhhY_6-Md4Z0327uEdfNbJrSEPJVPT55gjRhx4MorEhrabuafuY8thSPS4epwkOjjPtELwZxViWe1dzG5TQakJ_i8ZOQuUYFJg02RcwUTzE3ty-x7mkwj9t2wAdRqTagyaDIAVMTxP_Y4AS76xjA3aH43Q0HKHGAxxIlXBIQxImuPhlUbPtVtTHIsUwkIx2BDh8kPZ3Mgr3Cyky0F-cHpEFSi3rPSSLD_FVHlJRW2cODVm8E-s98CURQYs1npzDztzZgZPnnb9K57CB2Z50Ve6qUV7z4-uHs3nehiMJHktIs7LQIDAQAB",
    "privateKey": "-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQEAq8j2SHHfzMLlhYppnlk+QqjjjZwMkhK6s6rERd0JhhY/6+Md\n4Z0327uEdfNbJrSEPJVPT55gjRhx4MorEhrabuafuY8thSPS4epwkOjjPtELwZxV\niWe1dzG5TQakJ/i8ZOQuUYFJg02RcwUTzE3ty+x7mkwj9t2wAdRqTagyaDIAVMTx\nP/Y4AS76xjA3aH43Q0HKHGAxxIlXBIQxImuPhlUbPtVtTHIsUwkIx2BDh8kPZ3Mg\nr3Cyky0F+cHpEFSi3rPSSLD/FVHlJRW2cODVm8E+s98CURQYs1npzDztzZgZPnnb\n9K57CB2Z50Ve6qUV7z4+uHs3nehiMJHktIs7LQIDAQABAoIBAAufb7vBaf0ugfKx\n8D56AaKR+b925korK+hZw/40G9+veV4KQlclrjCsSc854BoeJET9wd18X5em++wp\nJuvf1uqiU6lC54y2up8gH8NLi+CP//shYDoz7aJlwgiqS94L0CIFZvWLHqsHIFxc\nuhUHKsaINr60VcnvVZLHc/UoIwJLT1Hk2gIMnxxnCqkL1m/BNDeYaT30DLMPaeby\nnaEsq6JG+pk0szJ9ivTZQrVzWL88qYJor7eR+MGBh65fhhSZyn229EL9DtwVGkU2\n8rlFwcCalhmCIgJO9vPK3QLoomT4FfokuECrxv0UwopYPBXyUycvzHmvbFTt5FS8\nKLgfMcMCgYEAwqKKSeAuoQpJO4x8hP7fYQ94ezoRkDlV9Q5ICcgJW6giMbzT2adg\nd2nuxQIwLRX/P4Dwh2OxCnOrX1FAMxmbs9/6OGgjHhKAAM0pIowZFs4Vqu/QlAZ5\nUdPzHdGuA5oSEBhVMxe0L1dWbQr0UpjemH6gOfswDFYsIawLXOPI+TsCgYEA4fIm\nQqKIBoYAGUPuNfjoK2ZQpRaFGAGuvfpSyljMQDnYJJtOGTW8SI0QFzd31snYx5yP\nvEvkR4lEcVPi6t6Mkdd4KVkmktdjIQ0ZOAlbBaaEWFy6lN7TyINJ7BAYFO/1D3Uj\n4Gi9O7dV7v49Bzp5tVNFrUihM1yfOdUfP3gCFrcCgYB8YtoT6mSCYIt6tgaiDCx/\n4B40SmENFcdcTBs3vRJV9DaeKLoPIEujJR0F5KcbOTKdx+5v6AMt1cxQpyFrRtNd\n+ib0Q4El59bMLFE8leI208+/JXHcF+MSq2x0wxr9jEo85QAWHfD2TE+ccmLAIpgn\nRs1pIKGNUMj1X/kHDT/UHwKBgAsmSeEL6C56OlME2SJsr/hESkJ7RAIVQyw4yBEY\nJKwerp3P1CDGWA40d9DNeeptd3cSML2X+SHWkjwNaasxZDpmKZXQwmiInGmrHc14\nGLfEqc86dDKYdFb2s5UkjiuqU6t5mlWelYf22hS7EwPiTNM30r5kUSAZt/nAnJQj\nNectAoGADXNyBnmq65m1YMlWe+PtDEi/hUZagVDPG7xh3T811fAi6+TZSLXCDVR4\ngju9FJkwjce29Bmt7xbFYRvIfVUGbuvMxvgBJG4A2BG8wrFbIGDLQEk5VYBvSkKK\nhniCoSnVEJYlfgyp9ri1vEgXrX18FwY1KADRc4EnDlEzwkkAAl0=\n-----END RSA PRIVATE KEY-----",
    "paydeeFields": {
      "MPI_TRANS_TYPE": "SALES",
      "MPI_MERC_ID": "000000000000003",
      "MPI_PURCH_DATE": "",
      "MPI_TRXN_ID": "",
      "MPI_ORI_TRXN_ID": "",
      "MPI_PURCH_CURR": "458",
      "MPI_PURCH_AMT": "150",
      "MPI_RESPONSE_TYPE": "JSON",
      "MPI_ADDITIONAL_INFO_IND": "",
      "MPI_PAYMENT_CHANNEL_ID": ""
    }
  },
  {
    "id": "tc_std_http_echo",
    "name": "E-commerce HTTP Echo Test",
    "description": "A standard POST request to verify JSON payloads.",
    "type": "http_post",
    "subtype": "standard",
    "url": "https://httpbin.org/post",
    "contentType": "application/json",
    "timeout": 5000,
    "expectedStatus": "200",
    "expectedSubstring": "\"order_id\": \"ECOMM-1002\"",
    "body": "{\n  \"order_id\": \"ECOMM-1002\",\n  \"amount\": 15.00,\n  \"currency\": \"MYR\"\n}"
  }
];

// Global App State
let testCases = [];
let selectedCaseId = null;
let currentFilter = 'all';
let runningCases = new Set();
let testResults = {}; // Map of caseId -> result details
let isServerMode = true; // Automatically detected

// DOM Elements
const testListContainer = document.getElementById('test-list-container');
const emptyScreen = document.getElementById('no-selection-screen');
const workspaceContent = document.getElementById('workspace-content');

// Header Stats
const statTotal = document.getElementById('stat-total');
const statPassed = document.getElementById('stat-passed');
const statFailed = document.getElementById('stat-failed');
const statRunning = document.getElementById('stat-running');

// Core Buttons
const btnAddTest = document.getElementById('btn-add-test');
const btnCreateFirst = document.getElementById('btn-create-first');
const btnRunAll = document.getElementById('btn-run-all');
const btnSave = document.getElementById('btn-save');
const btnDelete = document.getElementById('btn-delete');
const btnRun = document.getElementById('btn-run');

// Form Common
const caseNameInput = document.getElementById('case-name');
const caseDescInput = document.getElementById('case-description');
const caseTypeSelect = document.getElementById('case-type-select');
const formIso = document.getElementById('form-iso8583');
const formHttp = document.getElementById('form-http-post');

// Form ISO8583
const isoHost = document.getElementById('iso-host');
const isoPort = document.getElementById('iso-port');
const isoHeaderType = document.getElementById('iso-header-type');
const isoBitmapType = document.getElementById('iso-bitmap-type');
const isoMti = document.getElementById('iso-mti');
const isoFieldsTableBody = document.querySelector('#iso-fields-table tbody');
const btnAddIsoField = document.getElementById('btn-add-iso-field');

// Form HTTP POST
const httpSubtype = document.getElementById('http-subtype');
const subformStandard = document.getElementById('subform-standard');
const subformPaydee = document.getElementById('subform-paydee');

// Form HTTP Standard
const httpUrl = document.getElementById('http-url');
const httpContentType = document.getElementById('http-content-type');
const httpExpectedStatus = document.getElementById('http-expected-status');
const httpExpectedSubstring = document.getElementById('http-expected-substring');
const httpBody = document.getElementById('http-body');

// Form HTTP Paydee
const paydeeKeyexUrl = document.getElementById('paydee-keyex-url');
const paydeePaymentUrl = document.getElementById('paydee-payment-url');
const paydeeAutoTrxn = document.getElementById('paydee-auto-trxn');
const paydeePublickey = document.getElementById('paydee-publickey');
const paydeePrivatekey = document.getElementById('paydee-privatekey');
const paydeeFieldsTableBody = document.querySelector('#paydee-fields-table tbody');

// Inspector & Console
const tabConsole = document.getElementById('tab-console');
const tabResults = document.getElementById('tab-results');
const runConsoleLog = document.getElementById('run-console-log');
const noResultsState = document.getElementById('no-results-state');
const resultsDisplay = document.getElementById('results-display');
const resultVerdictBanner = document.getElementById('result-verdict-banner');
const resultVerdictDetails = document.getElementById('result-verdict-details');

// Decoded Inspector Section
const inspectorIsoSection = document.getElementById('inspector-iso-section');
const decodedFieldsBody = document.getElementById('decoded-fields-body');
const hexSent = document.getElementById('hex-sent');
const hexReceived = document.getElementById('hex-received');

// HTTP Inspector Section
const inspectorHttpSection = document.getElementById('inspector-http-section');
const httpRespStatus = document.getElementById('http-resp-status');
const httpRespTime = document.getElementById('http-resp-time');
const httpRespBodyRaw = document.getElementById('http-resp-body-raw');

// Mock Host Controls
const mockStatusIndicator = document.getElementById('mock-status-indicator');
const mockStatusText = document.getElementById('mock-status-text');
const mockPortInput = document.getElementById('mock-port');
const btnToggleMock = document.getElementById('btn-toggle-mock');
const btnClearMockLogs = document.getElementById('btn-clear-mock-logs');
const btnToggleMockDrawer = document.getElementById('btn-toggle-mock-drawer');
const mockLogsDrawer = document.getElementById('mock-logs-drawer');
const mockLogsOutput = document.getElementById('mock-logs-output');
const mockPortDisplay = document.getElementById('mock-port-display');
const drawerArrow = document.getElementById('drawer-arrow');

// Initialize App
document.addEventListener('DOMContentLoaded', async () => {
  initEventListeners();
  await checkServerStatus();
  loadTestCases();
  if (isServerMode) {
    loadMockStatus();
    setInterval(pollMockLogs, 2000);
  } else {
    disableServerSpecificUI();
  }
});

// Detect server availability
async function checkServerStatus() {
  try {
    const res = await fetch('/api/mock-host/status');
    if (res.ok) {
      isServerMode = true;
      console.log('Connected to backend API. Running in server mode.');
    } else {
      isServerMode = false;
    }
  } catch (e) {
    isServerMode = false;
    console.log('Backend API unreachable. Falling back to browser-only GitHub Pages mode.');
  }
}

// Adjust UI if running statically on GitHub Pages
function disableServerSpecificUI() {
  mockStatusIndicator.className = 'status-indicator';
  mockStatusText.innerText = 'Not Available (Static Browser Mode)';
  mockStatusText.style.color = 'var(--text-muted)';
  mockPortInput.disabled = true;
  btnToggleMock.disabled = true;
  btnClearMockLogs.disabled = true;
  
  const consoleHeader = document.querySelector('.console-header span');
  if (consoleHeader) consoleHeader.innerText = 'Browser-direct Diagnostics Console';
  
  runConsoleLog.innerHTML = `<span class="system-message">Running in Static GitHub Pages Mode. Runs will execute directly from your browser. Note: raw TCP (ISO8583) and Mock Host require Node.js backend to execute.</span>`;
}

// Event Listeners Setup
function initEventListeners() {
  btnAddTest.addEventListener('click', createNewTestCase);
  btnCreateFirst.addEventListener('click', createNewTestCase);

  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.filter;
      renderSidebar();
    });
  });

  caseTypeSelect.addEventListener('change', (e) => {
    const type = e.target.value;
    if (type === 'iso8583') {
      formIso.style.display = 'block';
      formHttp.style.display = 'none';
      document.getElementById('case-badge').innerText = 'ISO8583';
      document.getElementById('case-badge').style.background = '#8b5cf6';
    } else {
      formIso.style.display = 'none';
      formHttp.style.display = 'block';
      document.getElementById('case-badge').innerText = 'HTTP POST';
      document.getElementById('case-badge').style.background = '#06b6d4';
    }
  });

  httpSubtype.addEventListener('change', (e) => {
    const subtype = e.target.value;
    if (subtype === 'standard') {
      subformStandard.style.display = 'block';
      subformPaydee.style.display = 'none';
    } else {
      subformStandard.style.display = 'none';
      subformPaydee.style.display = 'block';
    }
  });

  btnSave.addEventListener('click', saveCurrentCaseDetails);
  btnDelete.addEventListener('click', deleteCurrentCase);
  
  btnRun.addEventListener('click', () => {
    if (selectedCaseId) {
      runTestCaseById(selectedCaseId);
    }
  });

  btnRunAll.addEventListener('click', runAllSuite);

  btnAddIsoField.addEventListener('click', () => {
    addIsoFieldRow('', '');
  });

  document.querySelectorAll('.inspector-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.inspector-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const target = tab.dataset.tab;
      document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
      document.getElementById(`tab-${target}`).classList.add('active');
    });
  });

  document.getElementById('btn-clear-console').addEventListener('click', () => {
    runConsoleLog.innerHTML = '<span class="system-message">Console cleared.</span>';
  });

  btnToggleMock.addEventListener('click', toggleMockServer);
  btnClearMockLogs.addEventListener('click', clearMockServerLogs);
  
  btnToggleMockDrawer.addEventListener('click', () => {
    const footer = document.querySelector('.app-footer');
    const isExpanded = footer.classList.toggle('expanded');
    
    if (isExpanded) {
      mockLogsDrawer.style.display = 'flex';
      drawerArrow.setAttribute('points', '6 9 12 15 18 9');
    } else {
      mockLogsDrawer.style.display = 'none';
      drawerArrow.setAttribute('points', '18 15 12 9 6 15');
    }
  });
}

// Fetch test cases
async function loadTestCases() {
  if (isServerMode) {
    try {
      const res = await fetch('/api/testcases');
      testCases = await res.json();
    } catch (err) {
      console.error(err);
      loadCasesFromLocalStorage();
    }
  } else {
    loadCasesFromLocalStorage();
  }
  
  renderSidebar();
  updateStats();

  if (testCases.length > 0 && !selectedCaseId) {
    selectTestCase(testCases[0].id);
  }
}

function loadCasesFromLocalStorage() {
  const localData = localStorage.getItem('testcases');
  if (localData) {
    try {
      testCases = JSON.parse(localData);
    } catch (e) {
      testCases = [...SEED_TEST_CASES];
    }
  } else {
    testCases = [...SEED_TEST_CASES];
    localStorage.setItem('testcases', JSON.stringify(testCases));
  }
}

// Render test case list in sidebar
function renderSidebar() {
  testListContainer.innerHTML = '';
  
  const filtered = testCases.filter(c => {
    if (currentFilter === 'all') return true;
    return c.type === currentFilter;
  });

  if (filtered.length === 0) {
    testListContainer.innerHTML = `<div class="empty-state" style="padding: 20px 0;"><p>No matches found.</p></div>`;
    return;
  }

  filtered.forEach(tc => {
    const item = document.createElement('div');
    item.className = `test-item ${tc.id === selectedCaseId ? 'active' : ''}`;
    
    const result = testResults[tc.id];
    let statusClass = 'idle';
    if (runningCases.has(tc.id)) {
      statusClass = 'running';
    } else if (result) {
      statusClass = result.status;
    }

    const typeLabel = tc.type === 'iso8583' ? 'ISO8583' : (tc.subtype === 'paydee' ? 'Paydee' : 'HTTP');

    item.innerHTML = `
      <div class="test-item-meta">
        <span class="test-item-badge">${typeLabel}</span>
        <span class="status-indicator-dot ${statusClass}"></span>
      </div>
      <div class="test-item-name">${tc.name || 'Unnamed Case'}</div>
      <div class="test-item-desc">${tc.description || 'No description'}</div>
    `;

    item.addEventListener('click', () => selectTestCase(tc.id));
    testListContainer.appendChild(item);
  });
}

// Select a test case and populate workspace
function selectTestCase(id) {
  selectedCaseId = id;
  const tc = testCases.find(c => c.id === id);
  if (!tc) return;

  document.querySelectorAll('.test-item').forEach(el => el.classList.remove('active'));
  renderSidebar();

  emptyScreen.style.display = 'none';
  workspaceContent.style.display = 'block';

  caseNameInput.value = tc.name || '';
  caseDescInput.value = tc.description || '';
  caseTypeSelect.value = tc.type;
  
  const badge = document.getElementById('case-badge');
  badge.innerText = tc.type === 'iso8583' ? 'ISO8583' : 'HTTP POST';
  badge.style.background = tc.type === 'iso8583' ? '#8b5cf6' : '#06b6d4';

  if (tc.type === 'iso8583') {
    formIso.style.display = 'block';
    formHttp.style.display = 'none';

    isoHost.value = tc.host || '127.0.0.1';
    isoPort.value = tc.port || 8583;
    isoHeaderType.value = tc.headerType || 'binary';
    isoBitmapType.value = tc.bitmapType || 'hex';
    isoMti.value = tc.mti || '0800';

    isoFieldsTableBody.innerHTML = '';
    const fields = tc.fields || {};
    const sortedFields = Object.keys(fields).sort((a,b) => parseInt(a) - parseInt(b));
    
    if (sortedFields.length === 0) {
      addIsoFieldRow('3', '000000');
    } else {
      sortedFields.forEach(fNum => {
        addIsoFieldRow(fNum, fields[fNum]);
      });
    }
  } else {
    formIso.style.display = 'none';
    formHttp.style.display = 'block';
    
    const subtype = tc.subtype || 'standard';
    httpSubtype.value = subtype;

    if (subtype === 'standard') {
      subformStandard.style.display = 'block';
      subformPaydee.style.display = 'none';

      httpUrl.value = tc.url || '';
      httpContentType.value = tc.contentType || 'application/json';
      httpExpectedStatus.value = tc.expectedStatus || 200;
      httpExpectedSubstring.value = tc.expectedSubstring || '';
      
      const bodyVal = tc.body;
      httpBody.value = typeof bodyVal === 'object' ? JSON.stringify(bodyVal, null, 2) : (bodyVal || '');
    } else {
      subformStandard.style.display = 'block'; // Ensure container wraps properly
      subformStandard.style.display = 'none';
      subformPaydee.style.display = 'block';

      paydeeKeyexUrl.value = tc.keyExchangeUrl || 'https://devlinkv2.paydee.co/mpigw/mkReq';
      paydeePaymentUrl.value = tc.paymentUrl || 'https://devlinkv2.paydee.co/mpigw/mpReq';
      paydeeAutoTrxn.checked = tc.autoGenerateTrxn !== false;
      paydeePublickey.value = tc.publicKey || '';
      paydeePrivatekey.value = tc.privateKey || '';

      paydeeFieldsTableBody.innerHTML = '';
      const fields = tc.paydeeFields || {};
      const standardKeys = [
        'MPI_TRANS_TYPE',
        'MPI_MERC_ID',
        'MPI_PURCH_DATE',
        'MPI_TRXN_ID',
        'MPI_ORI_TRXN_ID',
        'MPI_PURCH_CURR',
        'MPI_PURCH_AMT',
        'MPI_RESPONSE_TYPE',
        'MPI_ADDITIONAL_INFO_IND',
        'MPI_PAYMENT_CHANNEL_ID'
      ];

      standardKeys.forEach(key => {
        const val = fields[key] || '';
        const row = document.createElement('tr');
        row.innerHTML = `
          <td style="font-weight: 500; font-family: monospace; color: var(--color-secondary);">${key}</td>
          <td><input type="text" class="paydee-f-val" data-key="${key}" value="${val}"></td>
        `;
        paydeeFieldsTableBody.appendChild(row);
      });
    }
  }

  renderResultDisplay(id);
}

function addIsoFieldRow(fieldNum, fieldValue) {
  const row = document.createElement('tr');
  const fieldDesc = ISO_FIELD_NAMES[fieldNum] || 'Custom Private Field';
  
  row.innerHTML = `
    <td>
      <input type="number" class="iso-f-num" value="${fieldNum}" min="2" max="127" placeholder="Field #" style="width: 70px; text-align: center; font-family: monospace;">
    </td>
    <td class="iso-f-desc-cell" style="font-size: 11px; color: var(--text-muted);">${fieldDesc}</td>
    <td>
      <input type="text" class="iso-f-val" value="${fieldValue}" placeholder="Field data value...">
    </td>
    <td>
      <button class="btn-delete-row">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </button>
    </td>
  `;

  const fNumInput = row.querySelector('.iso-f-num');
  const fDescCell = row.querySelector('.iso-f-desc-cell');
  
  fNumInput.addEventListener('input', (e) => {
    const num = e.target.value;
    fDescCell.innerText = ISO_FIELD_NAMES[num] || 'Custom Private Field';
  });

  row.querySelector('.btn-delete-row').addEventListener('click', () => {
    row.remove();
  });

  isoFieldsTableBody.appendChild(row);
}

function createNewTestCase() {
  const newId = 'tc_' + Date.now();
  const defaultCase = {
    id: newId,
    name: 'New Test Case',
    description: 'Describe this test scenario...',
    type: 'iso8583',
    host: '127.0.0.1',
    port: 8583,
    headerType: 'binary',
    bitmapType: 'hex',
    mti: '0200',
    fields: {
      3: '000000',
      4: '000000001000',
      11: '000001'
    }
  };

  testCases.push(defaultCase);
  saveTestCasesToServer();
  selectTestCase(newId);
}

function deleteCurrentCase() {
  if (!selectedCaseId) return;
  if (!confirm('Are you sure you want to delete this test case?')) return;

  testCases = testCases.filter(c => c.id !== selectedCaseId);
  delete testResults[selectedCaseId];
  selectedCaseId = null;

  saveTestCasesToServer();
  
  if (testCases.length > 0) {
    selectTestCase(testCases[0].id);
  } else {
    workspaceContent.style.display = 'none';
    emptyScreen.style.display = 'flex';
    renderSidebar();
    updateStats();
  }
}

function saveCurrentCaseDetails() {
  if (!selectedCaseId) return;

  const tc = testCases.find(c => c.id === selectedCaseId);
  if (!tc) return;

  tc.name = caseNameInput.value.trim() || 'Unnamed Case';
  tc.description = caseDescInput.value.trim();
  tc.type = caseTypeSelect.value;

  if (tc.type === 'iso8583') {
    tc.host = isoHost.value.trim();
    tc.port = parseInt(isoPort.value, 10);
    tc.headerType = isoHeaderType.value;
    tc.bitmapType = isoBitmapType.value;
    tc.mti = isoMti.value.trim();
    
    tc.fields = {};
    const rows = isoFieldsTableBody.querySelectorAll('tr');
    rows.forEach(row => {
      const num = row.querySelector('.iso-f-num').value.trim();
      const val = row.querySelector('.iso-f-val').value.trim();
      if (num && val !== '') {
        tc.fields[num] = val;
      }
    });
  } else {
    tc.subtype = httpSubtype.value;
    
    if (tc.subtype === 'standard') {
      tc.url = httpUrl.value.trim();
      tc.contentType = httpContentType.value;
      tc.expectedStatus = httpExpectedStatus.value;
      tc.expectedSubstring = httpExpectedSubstring.value.trim();
      
      const bodyRaw = httpBody.value.trim();
      try {
        tc.body = bodyRaw ? JSON.parse(bodyRaw) : '';
      } catch (e) {
        tc.body = bodyRaw;
      }
    } else {
      tc.keyExchangeUrl = paydeeKeyexUrl.value.trim();
      tc.paymentUrl = paydeePaymentUrl.value.trim();
      tc.autoGenerateTrxn = paydeeAutoTrxn.checked;
      tc.publicKey = paydeePublickey.value.trim();
      tc.privateKey = paydeePrivatekey.value.trim();

      tc.paydeeFields = {};
      const inputs = paydeeFieldsTableBody.querySelectorAll('.paydee-f-val');
      inputs.forEach(input => {
        const key = input.dataset.key;
        tc.paydeeFields[key] = input.value.trim();
      });
    }
  }

  saveTestCasesToServer();
  alert('Test case configuration saved successfully.');
}

async function saveTestCasesToServer() {
  if (isServerMode) {
    try {
      await fetch('/api/testcases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testCases)
      });
    } catch (err) {
      console.error(err);
      saveCasesToLocalStorageOnly();
    }
  } else {
    saveCasesToLocalStorageOnly();
  }
  renderSidebar();
  updateStats();
}

function saveCasesToLocalStorageOnly() {
  localStorage.setItem('testcases', JSON.stringify(testCases));
}

// Run a single test case
async function runTestCaseById(id) {
  const tc = testCases.find(c => c.id === id);
  if (!tc) return;

  runningCases.add(id);
  renderSidebar();
  updateStats();

  document.querySelector('.inspector-tab[data-tab="console"]').click();

  if (isServerMode) {
    runConsoleLog.innerHTML = `<span class="sys-log">[SYSTEM] Spawning runner thread on server for "${tc.name}"...</span>\n`;
    try {
      const response = await fetch('/api/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tc)
      });

      const result = await response.json();
      testResults[id] = result;
      renderConsoleLogs(result.logs);
      renderResultDisplay(id);
      document.querySelector('.inspector-tab[data-tab="results"]').click();
    } catch (err) {
      runConsoleLog.innerHTML += `\n<span style="color:var(--color-fail);">[ERROR] Run failed: ${err.message}</span>`;
    } finally {
      runningCases.delete(id);
      renderSidebar();
      updateStats();
    }
  } else {
    // RUN CLIENT DIRECT MODE (BROWSER ONLY / GITHUB PAGES)
    runConsoleLog.innerHTML = `<span class="sys-log">[BROWSER DIRECT] Starting execution for "${tc.name}"...</span>\n`;
    const logs = [];
    const addLog = (msg) => {
      const timestamp = new Date().toISOString().split('T')[1].slice(0, -1);
      logs.push(`[${timestamp}] ${msg}`);
      updateConsoleOutput(logs);
    };

    try {
      if (tc.type === 'iso8583') {
        addLog(`❌ Cannot run raw TCP Sockets directly from a web browser (GitHub Pages restrictions).`);
        addLog(`💡 To run ISO8583 tests, run this dashboard locally using Node.js.`);
        addLog(`💡 Packed Message Payload preview would connect to: ${tc.host}:${tc.port}`);
        
        testResults[id] = {
          status: 'fail',
          logs,
          error: 'Raw TCP Sockets not supported in browser environment'
        };
      } else {
        // Run HTTP POST in browser
        if (tc.subtype === 'paydee') {
          await runPaydeeTestInBrowser(tc, addLog, id);
        } else {
          await runStandardHttpPostInBrowser(tc, addLog, id);
        }
      }
      
      renderResultDisplay(id);
      document.querySelector('.inspector-tab[data-tab="results"]').click();
    } catch (e) {
      addLog(`[ERROR] Direct Execution Error: ${e.message}`);
    } finally {
      runningCases.delete(id);
      renderSidebar();
      updateStats();
    }
  }
}

// Helpers for Direct browser console updates
function updateConsoleOutput(logs) {
  runConsoleLog.innerHTML = '';
  logs.forEach(line => {
    const el = document.createElement('div');
    if (line.includes('✅') || line.includes('Verdict: PASS') || line.includes('Success')) {
      el.style.color = 'var(--color-pass)';
    } else if (line.includes('❌') || line.includes('Fail') || line.includes('Verdict: FAIL') || line.includes('Blocked')) {
      el.style.color = 'var(--color-fail)';
    } else if (line.includes('--- STEP')) {
      el.style.color = 'var(--color-secondary)';
      el.style.fontWeight = 'bold';
    } else {
      el.style.color = '#38bdf8';
    }
    el.textContent = line;
    runConsoleLog.appendChild(el);
  });
  runConsoleLog.scrollTop = runConsoleLog.scrollHeight;
}

function renderConsoleLogs(logsList) {
  runConsoleLog.innerHTML = '';
  logsList.forEach(line => {
    const el = document.createElement('div');
    if (line.includes('✅') || line.includes('Verdict: PASS')) {
      el.style.color = 'var(--color-pass)';
    } else if (line.includes('❌') || line.includes('Fail') || line.includes('Verdict: FAIL')) {
      el.style.color = 'var(--color-fail)';
    } else if (line.includes('--- STEP')) {
      el.style.color = 'var(--color-secondary)';
      el.style.fontWeight = 'bold';
    } else {
      el.style.color = '#38bdf8';
    }
    el.textContent = line;
    runConsoleLog.appendChild(el);
  });
  runConsoleLog.scrollTop = runConsoleLog.scrollHeight;
}

// Generate DateTime and ID formatted exactly like original Paydee Page Script
function getFormattedDateTime() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return d.getFullYear() +
         pad(d.getMonth() + 1) +
         pad(d.getDate()) +
         pad(d.getHours()) +
         pad(d.getMinutes()) +
         pad(d.getSeconds());
}

// Run Paydee Flow directly in browser JS (incorporating jsrsasign)
async function runPaydeeTestInBrowser(tc, addLog, id) {
  const fields = { ...tc.paydeeFields };
  const privateKey = tc.privateKey;
  const publicKey = tc.publicKey;
  const keyExchangeUrl = tc.keyExchangeUrl || 'https://devlinkv2.paydee.co/mpigw/mkReq';
  const paymentUrl = tc.paymentUrl || 'https://devlinkv2.paydee.co/mpigw/mpReq';

  if (tc.autoGenerateTrxn) {
    const formattedDate = getFormattedDateTime();
    fields['MPI_PURCH_DATE'] = formattedDate;
    fields['MPI_TRXN_ID'] = 'PAGUAT' + formattedDate;
    addLog(`Auto-generated date: ${fields['MPI_PURCH_DATE']}`);
    addLog(`Auto-generated trxn ID: ${fields['MPI_TRXN_ID']}`);
  }

  // MAC Generation using jsrsasign library loaded in index.html
  let macVal = '';
  try {
    const orderedKeys = [
      'MPI_TRANS_TYPE',
      'MPI_MERC_ID',
      'MPI_TRXN_ID',
      'MPI_ORI_TRXN_ID',
      'MPI_PURCH_DATE',
      'MPI_PURCH_CURR',
      'MPI_PURCH_AMT',
      'MPI_RESPONSE_TYPE',
      'MPI_ADDITIONAL_INFO_IND',
      'MPI_PAYMENT_CHANNEL_ID'
    ];

    let rawString = '';
    for (const key of orderedKeys) {
      rawString += (fields[key] || '');
    }

    addLog(`MAC String to sign: "${rawString}"`);

    // Clean Key
    const cleanKey = privateKey.trim().replace(/^[ \t]+/gm, '');
    let sig = new KJUR.crypto.Signature({"alg": "SHA256withRSA"});
    sig.init(cleanKey); 
    sig.updateString(rawString);
    let sigValueHex = sig.sign();
    
    let base64Value = hextob64(sigValueHex);
    let base64UrlValue = base64Value
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');

    macVal = base64UrlValue;
    fields['MPI_MAC'] = macVal;
    addLog(`Generated MAC: ${macVal}`);
  } catch (e) {
    addLog(`❌ Sign Error: ${e.message}`);
    testResults[id] = { status: 'fail', logs: logs, error: `MAC signing error: ${e.message}` };
    return;
  }

  // Step 1: Key Exchange (mkReq)
  addLog(`--- STEP 1: Key Exchange (mkReq) ---`);
  addLog(`POST ${keyExchangeUrl}`);

  const rawReq = {
    merchantId: fields['MPI_MERC_ID'],
    pubKey: publicKey,
    purchaseId: fields['MPI_TRXN_ID']
  };

  try {
    const res = await fetch(keyExchangeUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rawReq)
    });

    const result = await res.json();
    addLog(`mkReq Response: ${JSON.stringify(result)}`);

    if (result.errorCode !== '000') {
      addLog(`❌ Key Exchange failed: ${result.errorDesc || result.errorMessage}`);
      testResults[id] = { status: 'fail', logs, error: `Key Exchange Failed (${result.errorCode})` };
      return;
    }
    addLog(`✅ Key Exchange successful.`);
  } catch (err) {
    addLog(`⚠️ Connection Blocked: Check if server allows CORS for fetch request. (If blocked, running locally resolves CORS).`);
    addLog(`Error detail: ${err.message}`);
    testResults[id] = { status: 'fail', logs, error: `Key Exchange Network CORS error: ${err.message}` };
    return;
  }

  // Step 2: Payment Request (mpReq)
  addLog(`--- STEP 2: Payment Request (mpReq) ---`);
  addLog(`POST ${paymentUrl}`);

  const payload = new URLSearchParams();
  for (const [k, v] of Object.entries(fields)) {
    if (v !== undefined && v !== null && v.trim() !== '') {
      payload.append(k, v);
    }
  }

  try {
    const startTime = Date.now();
    const res = await fetch(paymentUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: payload
    });
    const duration = Date.now() - startTime;

    const resText = await res.text();
    addLog(`mpReq response: ${resText.slice(0, 300)}...`);

    let resJson = null;
    try {
      resJson = JSON.parse(resText);
    } catch (_) {}

    let status = 'fail';
    let errDetail = 'Gateway returned error';

    if (resJson) {
      const rc = resJson.ERR_CODE || resJson.errorCode || resJson.MPI_ERR_CODE;
      if (rc === '000' || rc === '00') {
        status = 'pass';
        errDetail = null;
      } else {
        errDetail = `Code ${rc}: ${resJson.ERR_DESC || resJson.errorDesc}`;
      }
    } else if (resText.includes('Success') || resText.includes('errorCode":"000"')) {
      status = 'pass';
      errDetail = null;
    }

    addLog(`Verdict: ${status.toUpperCase()}`);

    testResults[id] = {
      status,
      logs,
      duration,
      httpStatus: res.status,
      responseBody: resText,
      responseJson: resJson,
      error: errDetail
    };
  } catch (err) {
    addLog(`❌ Payment Request Network Error: ${err.message}`);
    testResults[id] = { status: 'fail', logs, error: `CORS Block / Network Error: ${err.message}` };
  }
}

// Run Standard HTTP POST directly in browser JS
async function runStandardHttpPostInBrowser(tc, addLog, id) {
  const url = tc.url;
  const contentType = tc.contentType || 'application/json';
  let body = tc.body || '';

  addLog(`POST ${url}`);
  addLog(`Content-Type: ${contentType}`);

  let formattedBody = body;
  if (contentType === 'application/x-www-form-urlencoded' && typeof body === 'object') {
    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(body)) {
      if (v !== '') params.append(k, v);
    }
    formattedBody = params.toString();
  } else if (contentType === 'application/json' && typeof body === 'object') {
    formattedBody = JSON.stringify(body);
  }

  try {
    const startTime = Date.now();
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': contentType },
      body: formattedBody
    });
    const duration = Date.now() - startTime;

    const resText = await res.text();
    addLog(`Response Status: ${res.status} ${res.statusText} in ${duration}ms`);

    let resJson = null;
    try {
      resJson = JSON.parse(resText);
    } catch (_) {}

    let status = 'pass';
    const expected = parseInt(tc.expectedStatus, 10) || 200;
    
    if (res.status !== expected) {
      addLog(`❌ Failed: Expected status ${expected}, got ${res.status}`);
      status = 'fail';
    }

    if (tc.expectedSubstring && !resText.includes(tc.expectedSubstring)) {
      addLog(`❌ Failed: Response missing substring "${tc.expectedSubstring}"`);
      status = 'fail';
    }

    addLog(`Verdict: ${status.toUpperCase()}`);

    testResults[id] = {
      status,
      logs,
      duration,
      httpStatus: res.status,
      responseBody: resText,
      responseJson: resJson
    };
  } catch (err) {
    addLog(`❌ Fetch failed. (If requesting a private API, CORS must be bypassed or run locally).`);
    addLog(`Error: ${err.message}`);
    testResults[id] = {
      status: 'fail',
      logs,
      error: `Network / CORS Error: ${err.message}`
    };
  }
}

// Run all test cases in batch
async function runAllSuite() {
  if (testCases.length === 0) return;
  
  btnRunAll.disabled = true;
  btnRunAll.innerText = 'Suite Running...';

  testCases.forEach(tc => runningCases.add(tc.id));
  renderSidebar();
  updateStats();

  runConsoleLog.innerHTML = `<span class="sys-log">[SYSTEM] Starting batch run of all ${testCases.length} suite cases...</span>\n`;

  if (isServerMode) {
    try {
      const response = await fetch('/api/run-all', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      });

      const results = await response.json();
      Object.keys(results).forEach(id => {
        testResults[id] = results[id];
      });

      runConsoleLog.innerHTML += `\n[SYSTEM] Batch Run Complete.\n`;
      testCases.forEach(tc => {
        const res = results[tc.id];
        const statusText = res ? res.status.toUpperCase() : 'SKIPPED';
        const color = statusText === 'PASS' ? 'var(--color-pass)' : 'var(--color-fail)';
        runConsoleLog.innerHTML += `<div style="color: ${color}">- ${tc.name}: ${statusText}</div>`;
      });

      if (selectedCaseId) {
        renderResultDisplay(selectedCaseId);
      }
    } catch (err) {
      runConsoleLog.innerHTML += `\n<span style="color:var(--color-fail);">[ERROR] Run All Failed: ${err.message}</span>`;
    } finally {
      runningCases.clear();
      btnRunAll.disabled = false;
      btnRunAll.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg> Run All Suite`;
      renderSidebar();
      updateStats();
    }
  } else {
    // Run sequentially in browser
    for (const tc of testCases) {
      await runTestCaseById(tc.id);
    }
    runningCases.clear();
    btnRunAll.disabled = false;
    btnRunAll.innerHTML = `
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg> Run All Suite`;
    renderSidebar();
    updateStats();
  }
}

// Populate Data Inspector Tab
function renderResultDisplay(id) {
  const result = testResults[id];
  const tc = testCases.find(c => c.id === id);

  if (!result) {
    noResultsState.style.display = 'flex';
    resultsDisplay.style.display = 'none';
    return;
  }

  noResultsState.style.display = 'none';
  resultsDisplay.style.display = 'block';

  resultVerdictBanner.className = `verdict-banner ${result.status}`;
  
  if (result.status === 'pass') {
    document.querySelector('.verdict-status').innerText = 'PASSED';
  } else {
    document.querySelector('.verdict-status').innerText = 'FAILED';
  }

  if (tc.type === 'iso8583') {
    const rc = result.fields ? (result.fields[39] || 'N/A') : 'N/A';
    const detailText = rc !== 'N/A' 
      ? `Response Code (F39): ${rc} (${result.parsedFields?.[39]?.formatted.split(' - ')[1] || 'Unknown'})` 
      : `Result: ${result.error || 'Connection Failed'}`;
    resultVerdictDetails.innerText = detailText;

    inspectorIsoSection.style.display = 'block';
    inspectorHttpSection.style.display = 'none';

    decodedFieldsBody.innerHTML = '';
    if (result.parsedFields) {
      Object.keys(result.parsedFields).sort((a,b) => parseInt(a) - parseInt(b)).forEach(fNum => {
        const field = result.parsedFields[fNum];
        const row = document.createElement('tr');
        row.innerHTML = `
          <td class="f-num">F-${fNum}</td>
          <td style="font-weight: 500;">${field.name}</td>
          <td style="font-family: monospace; color:#38bdf8;">${field.formatted}</td>
        `;
        decodedFieldsBody.appendChild(row);
      });
    } else {
      decodedFieldsBody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:var(--text-muted)">${result.error || 'No fields parsed (Static Client limitations)'}</td></tr>`;
    }

    hexSent.innerText = result.sentHex || 'N/A';
    hexReceived.innerText = result.receivedHex || 'N/A';
  } else {
    const statusText = result.httpStatus ? `HTTP Status: ${result.httpStatus}` : 'N/A';
    const durationText = result.duration ? `Duration: ${result.duration}ms` : '';
    const errText = result.error ? ` | Error: ${result.error}` : '';
    resultVerdictDetails.innerText = `${statusText} ${durationText}${errText}`;

    inspectorIsoSection.style.display = 'none';
    inspectorHttpSection.style.display = 'block';

    httpRespStatus.innerText = result.httpStatus ? `${result.httpStatus}` : 'Network Fail';
    httpRespTime.innerText = result.duration ? `${result.duration}ms` : 'N/A';

    let bodyString = result.responseBody || '';
    if (result.responseJson) {
      bodyString = JSON.stringify(result.responseJson, null, 2);
    }
    httpRespBodyRaw.innerText = bodyString || '(Empty response body)';
  }
}

// Update running, passed, failed counters
function updateStats() {
  statTotal.innerText = testCases.length;
  
  let passedCount = 0;
  let failedCount = 0;
  
  testCases.forEach(tc => {
    const res = testResults[tc.id];
    if (res) {
      if (res.status === 'pass') passedCount++;
      else if (res.status === 'fail') failedCount++;
    }
  });

  statPassed.innerText = passedCount;
  statFailed.innerText = failedCount;
  statRunning.innerText = runningCases.size;
}

// Fetch Mock status from server
async function loadMockStatus() {
  try {
    const res = await fetch('/api/mock-host/status');
    const status = await res.json();
    updateMockHostUI(status);
  } catch (err) {
    console.error('Failed to get mock host status:', err);
  }
}

// Toggle Mock Host
async function toggleMockServer() {
  if (!isServerMode) return;
  const active = mockStatusText.innerText === 'Stopped';
  const port = parseInt(mockPortInput.value, 10) || 8583;

  try {
    const res = await fetch('/api/mock-host/toggle', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ active, port })
    });
    const status = await res.json();
    updateMockHostUI(status);
  } catch (err) {
    console.error(err);
    alert('Failed to toggle Mock Server connection.');
  }
}

// Clear mock logs
async function clearMockServerLogs() {
  if (!isServerMode) return;
  try {
    await fetch('/api/mock-host/clear-logs', { method: 'POST' });
    mockLogsOutput.innerHTML = '<span class="mock-log-line sys">Logs cleared.</span>';
  } catch (err) {
    console.error(err);
  }
}

// Poll mock server transaction logs
async function pollMockLogs() {
  if (!isServerMode) return;
  try {
    const res = await fetch('/api/mock-host/logs');
    const logs = await res.json();
    
    mockLogsOutput.innerHTML = '';
    if (logs.length === 0) {
      mockLogsOutput.innerHTML = '<span class="mock-log-line sys">Listening on TCP connection port... No transactions yet.</span>';
      return;
    }

    logs.forEach(log => {
      const el = document.createElement('div');
      el.className = `mock-log-line ${log.direction.toLowerCase()}`;
      
      const dirArrow = log.direction === 'IN' ? '📥 [REQ]' : (log.direction === 'OUT' ? '📤 [RESP]' : '⚙️ [SYS]');
      el.innerHTML = `[${log.timestamp}] <strong>${dirArrow} ${log.summary}</strong>`;
      
      if (log.detail) {
        const detailPre = document.createElement('pre');
        detailPre.style.fontSize = '10px';
        detailPre.style.margin = '4px 0 8px 24px';
        detailPre.style.color = '#86efac';
        detailPre.style.fontFamily = 'monospace';
        detailPre.textContent = log.detail;
        el.appendChild(detailPre);
      }
      
      mockLogsOutput.appendChild(el);
    });

    mockLogsOutput.scrollTop = mockLogsOutput.scrollHeight;
  } catch (err) {
    console.error('Mock server log fetch error:', err);
  }
}

// Update Footer mock server UI controls
function updateMockHostUI(status) {
  mockPortDisplay.innerText = status.port;
  mockPortInput.value = status.port;

  if (status.active) {
    mockStatusIndicator.className = 'status-indicator active';
    mockStatusText.innerText = 'Active';
    mockStatusText.style.color = 'var(--color-pass)';
    btnToggleMock.innerText = 'Stop Server';
    btnToggleMock.className = 'btn btn-danger-outline btn-small';
  } else {
    mockStatusIndicator.className = 'status-indicator';
    mockStatusText.innerText = 'Stopped';
    mockStatusText.style.color = 'var(--text-muted)';
    btnToggleMock.innerText = 'Start Server';
    btnToggleMock.className = 'btn btn-secondary-outline btn-small';
  }
}
