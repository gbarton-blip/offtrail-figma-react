// Shared banking data used across the BankHome, BankTransfer, and BankSettings screens.
// These screens are composed strictly from Offtrail Code-Connected components,
// so the data here maps onto generic components (Avatar, TileCallout, CardGuide, etc.).

const imgAmelia = 'https://static.figma.com/uploads/a760126f639ca34680e11f727e7593119d9c44fe'
const imgTeresa = 'https://static.figma.com/uploads/f7e2ba11c6a11c6d7712a56321a70b474a3dbc53'
const imgKarim = 'https://static.figma.com/uploads/8bc77a91af9a6bae4d369a5d2768f26cd66e2c03'
const imgJordan = 'https://static.figma.com/uploads/2f2d3067dad7b641f28978c2ff0dea7bb5176622'
const imgMaya = 'https://static.figma.com/uploads/48080c69f291b89e052c0d532eba87c3247125ec'
const imgLeo = 'https://static.figma.com/uploads/d31ce0e0d5bf18c86a5a1dd86027ce2508dcbfd7'

// Reused event photography, repurposed here as debit/credit card artwork.
const imgCardChecking = 'https://static.figma.com/uploads/c4873192a4772ee39f42a888fd7cd802dd8f089b'
const imgCardSavings = 'https://static.figma.com/uploads/73896fa4b194c87ed4d059f2ecd8f53b73930c0c'
const imgCardCredit = 'https://static.figma.com/uploads/bcfff7e005c552916c9b288b5db25aa35f3f54b8'

export const user = {
  name: 'Kaley B.',
  email: 'kaley.b@offtrail.bank',
  phone: '+1 (415) 555-0148',
  avatar: imgAmelia,
}

export const totalBalance = '$12,480.55'

export const accounts = [
  {
    id: 'checking',
    name: 'Everyday Checking',
    number: '•••• 4021',
    balance: '$4,208.16',
    category: 'CHECKING',
    src: imgCardChecking,
  },
  {
    id: 'savings',
    name: 'Rainy Day Savings',
    number: '•••• 9930',
    balance: '$7,640.00',
    category: 'SAVINGS',
    src: imgCardSavings,
  },
]

export const transactions = [
  { id: 'txn-1', merchant: 'Amelia Booth', note: 'Split — dinner', date: 'Today', amount: '-$24.50', avatar: imgAmelia },
  { id: 'txn-2', merchant: 'Payroll Deposit', note: 'Acme Studios', date: 'Yesterday', amount: '+$2,400.00', avatar: imgTeresa },
  { id: 'txn-3', merchant: 'Karim Nasser', note: 'Rent share', date: 'Mon', amount: '-$780.00', avatar: imgKarim },
]

export const recipients = [
  { id: 'rcp-amelia', name: 'Amelia Booth', handle: '@ameliab', avatar: imgAmelia },
  { id: 'rcp-teresa', name: 'Teresa Marin', handle: '@teresam', avatar: imgTeresa },
  { id: 'rcp-karim', name: 'Karim Nasser', handle: '@karimn', avatar: imgKarim },
  { id: 'rcp-jordan', name: 'Jordan Park', handle: '@jordanp', avatar: imgJordan },
  { id: 'rcp-maya', name: 'Maya Rivera', handle: '@mayar', avatar: imgMaya },
  { id: 'rcp-leo', name: 'Leo Chen', handle: '@leoc', avatar: imgLeo },
]

export const accountOptions = accounts.map((account) => ({
  value: account.id,
  label: `${account.name} (${account.number}) — ${account.balance}`,
}))

export function getAccount(id) {
  return accounts.find((account) => account.id === id)
}

export const statementAccountOptions = [
  { value: 'all', label: 'All accounts' },
  ...accountOptions,
]

export const statements = [
  {
    id: 'stmt-1',
    accountId: 'checking',
    period: 'July 2026',
    dateRange: 'Jul 1 – Jul 31',
    endingBalance: '$4,208.16',
    format: 'PDF',
  },
  {
    id: 'stmt-2',
    accountId: 'savings',
    period: 'July 2026',
    dateRange: 'Jul 1 – Jul 31',
    endingBalance: '$7,640.00',
    format: 'PDF',
  },
  {
    id: 'stmt-3',
    accountId: 'credit',
    period: 'July 2026',
    dateRange: 'Jul 1 – Jul 31',
    endingBalance: '$632.39',
    format: 'PDF',
  },
  {
    id: 'stmt-4',
    accountId: 'checking',
    period: 'June 2026',
    dateRange: 'Jun 1 – Jun 30',
    endingBalance: '$3,984.22',
    format: 'PDF',
  },
  {
    id: 'stmt-5',
    accountId: 'savings',
    period: 'June 2026',
    dateRange: 'Jun 1 – Jun 30',
    endingBalance: '$7,120.00',
    format: 'PDF',
  },
  {
    id: 'stmt-6',
    accountId: 'checking',
    period: 'May 2026',
    dateRange: 'May 1 – May 31',
    endingBalance: '$3,712.08',
    format: 'PDF',
  },
]
