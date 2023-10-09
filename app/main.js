var loadJS = function(url, implementationCode, location){
  //url is URL of external file, implementationCode is the code
  //to be called from the file, location is the location to 
  //insert the <script> element

  var scriptTag = document.createElement('script');
  scriptTag.src = url;

  scriptTag.onload = implementationCode;
  scriptTag.onreadystatechange = implementationCode;

  location.appendChild(scriptTag);
};
var yourCodeToBeCalled = function(){
//your code goes here
}


setTimeout(function(){

  $( document ).ready(function() {
 
 


    let coreClient = new TreeGraph.Conflux(CURRENT);
    console.log('SDK version: ', coreClient.version);
    
    let hashModal = new bootstrap.Modal(document.getElementById('hashModal'), {});
    let withdrawModal = new bootstrap.Modal(document.getElementById('withdrawModal'), {});
    var COUNTER=0;
    function adjustUnlockTime(time){
         return 1.1/86400*time;
    }
    const PoSPool = {
      watch: {
        'lang'(newSpace, old) {
          try {
            if (newSpace == 'en') {
              this.viewRender = {
                abccutDown: 'Airdrop ABC countdown',
                Core: 'Core',
                eSpace: 'eSpace',
                Language: 'English',
                connectWallet: 'Connect Wallet',
                APP: 'ABC PoS Pool',
                Features: 'Features:',
                FeaturesList: [
                  '1. Security First, we will NEVER change the contract code from Conflux official team, our KYC info have been provided to Conflux foundation team.',
              '2. ABC Pool is a fully autonomous DAO organization, 60% of the service fee will be used to ABC Token.',
              '3. Lossless stake to obtain CFX+ABC double income.',
              '4. Unique wallet CFX changes, email security notification system.<a href="https://email.confluxpos.cn">Email Notification System</a>'
                ],
                StakeRules: 'Stake Rules:',
                StakeRulesList: [
                  'The lock period of Stake/Unstake is 13+1 day(May need another 2~3 hours)',
                  'The reward will updated every hour',
                  'The Stake/Unstake CFX amount must be multiple of 1000',
                  'Performance fee is 8% of the PoS reward',
                  'The reward can be claimed any time'
                ],
                StakingVault: 'Staking Vault',
                TotalEarned: 'Total Earned',
                ExpectedAPY: 'Expected APY',
                StakerNumber: 'Staker Number',
                PoolStatus: 'Pool Status',
                PoSAddress: 'PoS Address',
                MyStaked: 'My Staked (CFX)',
                Balance: 'Balance',
                MyRewards: 'My Rewards (CFX)',
                LastUpdate: 'Last Update',
                Unstakeable: 'Unstakeable',
                WithdrawableCFX: 'Withdrawable CFX',
                Stake: 'Stake',
                Claim: 'Claim',
                Unstake: 'Unstake',
                Withdraw: 'Withdraw',
                Lockingvotes: 'Locking votes',
                Unlockingvotes: 'Unlocking votes（eSpace need about 1 day+8 hours）',
                StakAmount: 'Amount （CFX)',
                EndTime: 'EndTime',
                CongratulationsShort: 'Congratulations!',
                Congratulations: 'The lp address snapshot is completed on March 1st, which has been published on the official website https://confluxpos.cn. Then, a snapshot will be taken every day at varying times. The number of your lp is related to the number of airdropped cfx  CFX/ABC LP provider can earn extra CFX , here is the airdrop list',
                LPreward: 'CFX/ABC LP reward',
                //1
                Clarification: 'Clarification!',
                Fromthe: 'From the',
                votinglist: 'voting list',
                theactual: `The actual vote period is about 63 min(vs estimated 60 min), user have to wait for about 63/60=105% longer to withdraw their asset. Therefore, after stake, you need to wait for at least 13 days+ 15.6hours to unstake, after unstake, you need to wait 1 day+1.2 hours to withdraw.
                          Stake your CFX in Conflux PoS to help improve the network's finality and earn PoS rewards.`,
                MobileVersion: 'Mobile Version',
                //1
                Emailaddress: 'Email address',
                Phone: 'Phone',
                binding: 'binding',
                Wechat: 'Wechat: DP494935329',
                QQ: 'QQ: 1027288241',
                Telegram2: 'Telegram',
                meurl: 'https://t.me/abcdaohome',
                Twitter: 'Twitter',
                TwitterUrl: '@ABCpospool',
                Telegram: 'Telegram',
                TelegramYul: 'https://t.me/abcpoolenglish',
                Binding: 'Binding'
              };
              if (this.IsPC) {
                document.body.setAttribute('class', 'bg-light enLang')
              } else {
                document.body.setAttribute('class', 'bg-light mobileAbc enLang')
              }
            } else {
              this.viewRender = {
                abccutDown: '空投ABC倒計時：',
                Core: 'Core',
                eSpace: 'eSpace',
                Language: '繁體中文',
                connectWallet: '连接钱包',
                APP: 'ABC PoS Pool',
                Features: '特點：',
                FeaturesList: [
                  '1. 安全第壹，我們永遠不會改變Conflux基金會合約代碼，我們的身份信息已經提供給基金會作爲備案。',
                  '2. ABC Pool是壹個完全自治的DAO組織，60%的服務費收益用于賦能ABC token',
                  '3. 無損失參與PoS，獲得CFX+ABC雙收益',
                  '4. 独创的钱包cfx变动、邮箱安全通知系统，绑定邮箱链接 <a href="https://email.confluxpos.cn">Email Notification System</a>'
                ],
                StakeRules: '參與規則：',
                StakeRulesList: [
                  '參與/退出 鎖定期爲13+1天（可能會需要推遲2-3小時）',
                  'CFX獎勵每小時更新壹次',
                  '參與PoS份額必須是1000CFX的整數倍',
                  '服務費爲PoS收益的8%',
                  'CFX獎勵隨時可以取出'
                ],
                StakingVault: '參與總量',
                TotalEarned: '總收益',
                ExpectedAPY: '預計年化',
                StakerNumber: '參與人數',
                PoolStatus: '狀態',
                PoSAddress: 'PoS合約地址',
                MyStaked: '我的參與（CFX）',
                Balance: '余額',
                MyRewards: '我的收益 (CFX)',
                LastUpdate: '更新時間',
                Unstakeable: '可解鎖',
                WithdrawableCFX: '可提取CFX',
                Stake: '投入',
                Claim: '領取',
                Unstake: '解鎖',
                Withdraw: '撤回',
                Lockingvotes: '鎖定選票',
                Unlockingvotes: '解鎖選票',
                StakAmount: '金額（CFX）',
                EndTime: '結束時間',
                CongratulationsShort: '恭喜!',
                Congratulations: 'LP地址快照已經完成，已經在https://confluxpos.cn/mobile/lp.html發布,每天在不同時間隨機快照。妳在Swappi農場內的LP數量與空投CFX數量相關。這是公布的表單',
                LPreward: 'CFX/ABC LP reward',
                //1
                Clarification: '澄清!',
                Fromthe: '',
                votinglist: 'voting list',
                theactual: `從參與開始，實際投票時間約爲63分鍾（預計60分鍾）.用戶必須等待約爲63/60=105%的時間來解鎖，因此，參與後至少需要13天+15.6小時才能解鎖。提取則需要等待1天+1.2小時才能提取。
                您可以完全放心，您的CFX將投入到Conflux PoS中，以提高網絡的安全性爲前提獲取POS收益`,
                MobileVersion: '手機版',
                //1
                Emailaddress: '郵箱',
                Phone: '手機號',
                binding: '綁定',
                Wechat: 'Wechat: DP494935329',
                QQ: 'QQ: 1027288241',
                Telegram2: 'Telegram',
                meurl: 'https://t.me/abcdaohome',
                Twitter: 'Twitter',
                TwitterUrl: '@ABCpospool',
                Telegram: 'Telegram',
                TelegramYul: 'https://t.me/abcpoolenglish',
                Binding: 'Binding'
              };
              if (this.IsPC) {
                document.body.setAttribute('class', 'bg-light cnLang')
              } else {
                document.body.setAttribute('class', 'bg-light mobileAbc cnLang')
              }
            }
            this.changeStyle();
          } catch (error) {
    
          }
        },
        'space.value'(newSpace, old) {
          console.log('Space change: ', newSpace);
          this.contract.setCurrentNetwork(newSpace);
          //
          if (newSpace === 'Core') {
            if (this.coreAccount) {
              this.userInfo.account = this.coreAccount;
              this.userInfo.connected = true;
              this.loadAllUserInfo();
            } else {
              this.userInfo.account = '';
              this.userInfo.connected = false;
              this.resetUserInfo();
            }
          } else if (newSpace === 'eSpace') {
            if (this.eSpaceAccount) {
              this.userInfo.account = this.eSpaceAccount;
              this.userInfo.connected = true;
              this.loadAllUserInfo();
            } else {
              this.userInfo.account = '';
              this.userInfo.connected = false;
              this.resetUserInfo();
            }
          }
          this.loadPoolInfo();
        },
        'featuresSH'(newVal, old) {
          this.changeStyle();
        },
        'StakeRulesSH'(newVal, old) {
          this.changeStyle();
        }
      },
      data() {
        return {
          featuresSH: true,
          StakeRulesSH: true,
          lang: 'en',
          viewRender: {
            abccutDown: 'Airdrop ABC countdown',
            Core: 'Core',
            eSpace: 'eSpace',
            Language: 'English',
            connectWallet: 'Connet Wallet',
            APP: 'ABC PoS Pool',
            Features: 'Features:',
            FeaturesList: [
              '1. Security First, we will NEVER change the contract code from Conflux official team, our KYC info have been provided to Conflux foundation team.',
              '2. ABC Pool is a fully autonomous DAO organization, 60% of the service fee will be used to ABC Token.',
              '3. Lossless stake to obtain CFX+ABC double income.',
              '4. Unique wallet CFX changes, email security notification system.<a href="https://email.confluxpos.cn">Email Notification System</a>'
            ],
            StakeRules: 'Stake Rules:',
            StakeRulesList: [
              'The lock period of Stake/Unstake is 13+1 day(May need another 2~3 hours)',
              'The reward will updated every hour',
              'The Stake/Unstake CFX amount must be multiple of 1000',
              'Performance fee is 8% of the PoS reward',
              'The reward can be claimed any time'
            ],
            StakingVault: 'Staking Vault',
            TotalEarned: 'Total Earned',
            ExpectedAPY: 'Expected APY',
            StakerNumber: 'Staker Number',
            PoolStatus: 'Pool Status',
            PoSAddress: 'PoS Address',
            MyStaked: 'My Staked (CFX)',
            Balance: 'Balance',
            MyRewards: 'My Rewards (CFX)',
            LastUpdate: 'Last Update',
            Unstakeable: 'Unstakeable',
            WithdrawableCFX: 'Withdrawable CFX',
            Stake: 'Stake',
            Claim: 'Claim',
            Unstake: 'Unstake',
            Withdraw: 'Withdraw',
            Lockingvotes: 'Locking votes',
            Unlockingvotes: 'Unlocking votes（eSpace need about 1 day+8 hours）',
            StakAmount: 'Amount （CFX)',
            EndTime: 'EndTime',
            CongratulationsShort: 'Congratulations!',
            Congratulations: 'The LP address snapshot has been completed and published at https://confluxpos.cn/mobile/lp.html, with random snapshots taken every day at different times. Your LP quantity within the Swappi farm is related to the airdropped CFX quantity.',
            LPreward: 'CFX/ABC LP reward',
            //1
            Clarification: 'Clarification!',
            Fromthe: 'From the',
            votinglist: 'voting list',
            theactual: `The actual vote period is about 63 min(vs estimated 60 min), user have to wait for about 63/60=105% longer to withdraw their asset. Therefore, after stake, you need to wait for at least 13 days+ 15.6hours to unstake, after unstake, you need to wait 1 day+1.2 hours to withdraw.
                      Stake your CFX in Conflux PoS to help improve the network's finality and earn PoS rewards.`,
            MobileVersion: 'Mobile Version',
            //1
            Emailaddress: 'Email address',
            Phone: 'Phone',
            binding: 'binding',
            Wechat: 'Wechat: DP494935329',
            QQ: 'QQ: 1027288241',
            Telegram: 'Telegram',
            TelegramUrl: 'https://t.me/abcdaohome',
            Twitter: 'Twitter',
            TwitterUrl: '@ABCpospool',
            Telegram: 'Telegram',
            TelegramYul: 'https://t.me/abcpoolenglish',
            Binding: 'Binding'
          },
          amount1: '$5.35',
          amount2: '+11.72%',
          ades: 'Airdrop ABC countdown:',
          anum: [1, 2],
          amount3: '0.05ABC/1000CFX',
          space: spaceStore,
          config: configStore,
          chainStatus: {},
          poolInfo: {
            // status: 'Good', // TODO load the real pool status
            status: {},
            name: '',
            totalLocked: 0,
            totalRevenue: 0,
            userShareRatio: 0n,
            apy: 0,
            lastRewardTime: 0,
            stakerNumber: '0',
            posAddress: '',
            inCommittee: false,
          },
          userInfo: {
            balance: 0,
            connected: false,
            votes: 0n,
            available: 0n,
            userInterest: 0,
            account: '',
            locked: 0n,
            unlocked: 0n,
            userInQueue: [],
            userOutOueue: [],
            nftCount: 0,
          },
          stakeCount: 0,  // stake input value
          unstakeCount: 0, // unstake input value
          txhash: '',
          eSpaceBlockNumber: 0,
          eSpaceAccount: '',
          coreAccount: '',
        }
      },
    
      async created() {
        if (!this.IsPC) {
          this.StakeRulesSH = false;
          this.featuresSH = false;
        }
        let _that = this;
        
        setInterval(function () {
          // $.get("https://fccfx.gspos.club/abc_price.json", function(data){
          //             console.log(313);
          //     $('#priceCell').val(data.price.toFixed(6))
          // });
          if(COUNTER<1){
            $('#btnConnectWallet').click();
          }
          COUNTER++;
          
          $.ajax({
            url:"./abc_price.json",
            type: "GET",
            success: function (data) {
              _that.amount1 = data.price.toFixed(6)
              $('#priceCell').html(_that.amount1)
            },
            dataType: "json"
          });
    
        }, 3000)
    
        // Detect current network
        try {
          if (conflux != undefied && conflux) {
    
            let status = await confluxRequest({ method: 'cfx_getStatus' });
            let netId = Number(status.chainId);
            if (netId === MAINNET.networkId) {
              CURRENT = MAINNET;
            } else if (netId === TESTNET.networkId) {
              CURRENT = TESTNET;
            }
          } else if (ethereum) {
    
            if (ethereum.networkVersion == MAINNET.eNetId) {
              CURRENT = MAINNET;
            } else if (ethereum.networkVersion == TESTNET.eNetId) {
              CURRENT = TESTNET;
            }
          }
    
        } catch (ex) {
    
          if (ethereum.networkVersion == MAINNET.eNetId) {
            CURRENT = MAINNET;
          } else if (ethereum.networkVersion == TESTNET.eNetId) {
            CURRENT = TESTNET;
          }
    
        }
        console.log('Current network: ', CURRENT);
        this.config.value = CURRENT;
        coreClient = new TreeGraph.Conflux(CURRENT);
    
        this.contract = new PoSPoolContract({
          network: this.space.value,
          coreAddress: CURRENT.poolAddress,
          coreRpc: CURRENT.url,
          coreNetId: CURRENT.networkId,
          eSpaceAddress: CURRENT.eSpaceAddress,
          eSpaceRpc: CURRENT.eSpaceRpc,
        });
         console.log(372,this.contract)
        // load pool info
        this.loadPoolInfo();
        await this.loadPoolMetaInfo();
        this.loadRewardChartData();
    
        if (CURRENT.networkId === MAINNET.networkId) {
          this.loadLastRewardTime();
          this.loadPosNodeStatus();
        }
      },
    
      mounted() {
        try {
          this.contract = new PoSPoolContract({
            network: this.space.value,
            coreAddress: CURRENT.poolAddress,
            coreRpc: CURRENT.url,
            coreNetId: CURRENT.networkId,
            eSpaceAddress: CURRENT.eSpaceAddress,
            eSpaceRpc: CURRENT.eSpaceRpc,
          });
           console.log(372,this.contract)
          // toggle visibility of the app element
          const app = document.getElementById('app');
          // app.setAttribute('class', 'container'); // 此处删除gdy
          if (localStorage.getItem('language')) {
            this.lang = localStorage.getItem('language');
          }
          this.getAnum(); // 倒计时
          if (!this.IsPC) {
            document.body.setAttribute('class', 'bg-light mobileAbc')
          }
        } catch (error) {
    
        }
    
      },
    
      computed: {
        IsPC() {
          try {
            var userAgentInfo = navigator.userAgent;
            var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
              if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
            }
            return flag;
          } catch (error) {
    
          }
    
        },
        perFee() {
          return (10000n - this.poolInfo.userShareRatio) / 100n;
        },
    
        formatedTotalLocked() {
          return formatUnit(this.poolInfo.totalLocked.toString(), "CFX");
        },
    
        formatedTotalRevenue() {
          return formatUnit(this.poolInfo.totalRevenue.toString(), "CFX");
        },
    
        prettyTotalLocked() {
          const totalLocked = this.poolInfo.totalLocked;
          if (totalLocked === 0) return 0;
          return prettyFormat(totalLocked.toString());
        },
    
        prettyTotalRevenue() {
          const totalRevenue = this.poolInfo.totalRevenue;
          if (totalRevenue == 0) return 0;
          return prettyFormat(totalRevenue.toString());
        },
    
        userStakedCFX() {
          return this.userInfo.votes * BigInt(ONE_VOTE_CFX);
        },
    
        unstakeableCFX() {
          return this.userInfo.locked * BigInt(ONE_VOTE_CFX);
        },
    
        withdrawableCFX() {
          return this.userInfo.unlocked * BigInt(ONE_VOTE_CFX);
        },
    
        shortenAccount() {
          const account = this.userInfo.account;
          if (account.match(':')) {
            return TreeGraph.address.shortenCfxAddress(account);
          } else {
            return `${account.slice(0, 4)}...${account.slice(-4)}`;
          }
        },
    
        lastRewardTime() {
          const lastTime = new Date(this.poolInfo.lastRewardTime * 1000);
          return formatDateTime(lastTime);
        },
    
        shortPosAddress() {
          if (!this.poolInfo.posAddress) {
            return 'Loading...';
          }
          const start = this.poolInfo.posAddress.slice(0, 6);
          return `${start}...`;
        },
    
        posAddressLink() {
          return `${CURRENT.scanURL}/pos/accounts/${this.poolInfo.posAddress}`;
        },
    
        shortHash() {
          if (!this.txhash) return '';
          return this.txhash.slice(0, 10) + '...';
        },
    
        txScanLink() {
          if (!this.txhash) return '#';
          return `${CURRENT.scanURL}/transaction/${this.txHash}`;
        },
    
        vip() {
          const available = this.userInfo.available;
          if (available >= 1000) { // VIP4(100w) 2%
            return 4;
          } else if (available >= 100) { // VIP3(10w) 3%
            return 3;
          } else if (available >= 50) { // VIP2(5w) 4%
            return 2;
          } else if (available >= 10) { // VIP1(1w) 5%
            return 1;
          } else {
            return 0;
          }
        }
      },
    
      methods: {
        changeStyle() {
          if (!this.IsPC) {
            if (this.lang === 'en') {
              if (this.featuresSH && this.StakeRulesSH) {
                document.body.style.backgroundSize = '100% 18.6rem';
              } else if (this.featuresSH && !this.StakeRulesSH) {
                document.body.style.backgroundSize = '100% 15.35rem';
              } else if (!this.featuresSH && this.StakeRulesSH) {
                document.body.style.backgroundSize = '100% 15.35rem';
              } else if (!this.featuresSH && !this.StakeRulesSH) {
                document.body.style.backgroundSize = '100% 11.8rem';
              }
            } else {
              if (this.featuresSH && this.StakeRulesSH) {
                document.body.style.backgroundSize = '100% 17.2rem';
              } else if (this.featuresSH && !this.StakeRulesSH) {
                document.body.style.backgroundSize = '100% 14.35rem';
              } else if (!this.featuresSH && this.StakeRulesSH) {
                document.body.style.backgroundSize = '100% 14.85rem';
              } else if (!this.featuresSH && !this.StakeRulesSH) {
                document.body.style.backgroundSize = '100% 11.8rem';
              }
            }
          }
        },
        // 时间倒计时
        getAnum() {
          if (new Date().getTime() - new Date('2023-04-10').getTime() < 0) {
            this.anum = [0, 1];
          } else {
            let _date = parseInt((new Date().getTime() - new Date('2023-04-10').getTime()) / 86400000) % 25;
            if (_date === 0) {
              this.anum = [0, 0];
            } else {
              if (25 - _date < 10) {
                this.anum = [0, 25 - _date]
              } else {
                this.anum = [(25 - _date + '')[0], (25 - _date + '')[1]]
              }
            }
          }
        },
        changeLanguage() {
          this.lang = (this.lang === 'en' ? 'cn' : 'en');
          localStorage.setItem('language', this.lang);
        },
        bindAddress() {
          // alert('绑定');
        },
    
        isCore() {
          return this.space.value === 'Core';
        },
    
        resetUserInfo() {
          this.userInfo = {
            balance: 0,
            connected: false,
            votes: 0n,
            available: 0n,
            userInterest: 0,
            account: '',
            locked: 0n,
            unlocked: 0n,
            userInQueue: [],
            userOutOueue: [],
            nftCount: 0,
          };
        },
    
        async loadCoreChainInfo() {
          const status = await coreClient.cfx.getStatus();
          this.chainStatus = status;
          return status;
        },
    
        async connectWallet() {
          try {
    
            if (this.isCore()) {
              if (!window.conflux) {
             

              loadJS('/app/js-conflux-sdk.umd.min.js', yourCodeToBeCalled, document.body);
                alert('Please install Conflux Wallet13468.');
              }
              const accounts = await requestCoreAccounts();
              if (accounts.length === 0) {
                alert('Request account failed');
                return;
              }
              const account = accounts[0];
              this.userInfo.account = account;
              this.userInfo.connected = true;
              this.coreAccount = account;
              //
              await this.loadAllUserInfo();
              this.loadUserNFTInfo();
    
              this.contract.setCoreProvider(window.conflux);
    
              await this.loadCoreChainInfo();
    
              if (this.chainStatus.chainId !== CURRENT.networkId) {
                alert('Please switch wallet to ' + CURRENT.networkId);
                return;
              }
            } else {
                if (typeof window.ethereum === 'undefined') {
                  alert('Please install Metamask');
                  return;
                }

                if (ethereum.networkVersion === CURRENT.eNetId) 
                {
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const accounts = await provider.send("eth_requestAccounts", []);
                    if (accounts.length === 0) {
                      alert('Request account failed');
                      return;
                    }
                    const account = accounts[0];
          
                    this.userInfo.account = account;
                    this.userInfo.connected = true;
                    this.eSpaceAccount = account;
          
                    // TODO watch on account change
          
                    await this.loadAllUserInfo();
          
                    this.contract.setESpaceProvider(provider);
          
                    let blockNumber = await provider.getBlockNumber()
                    this.eSpaceBlockNumber = blockNumber;
                }else{
                      /*****************************start*********************************************** */

                      // await window.ethereum.enable();
                      const _accounts= await ethereum.request({ method: 'eth_requestAccounts' })

                      const _chainId = await window.ethereum.request({
                        method: "eth_chainId",
                      });
                      if (parseInt(_chainId, 16) != CURRENT.eNetId) {
                        alert('Please switch wallet to  Conflux eSpace netWork');
                        return;
                      }

                      let _walletAccount = ''
                      if (_accounts.length>0) {
                        _walletAccount = _accounts[0]
                      }

                      const onAccountsChanged = async (accounts) => {
                        if (accounts && accounts.length > 0) {
                          _walletAccount =accounts[0]
                          this.userInfo.account = _walletAccount;
                          this.userInfo.connected = true;
                          this.eSpaceAccount = _walletAccount;

                          // TODO watch on account change 
                          await this.loadAllUserInfo();
                        }
                      }
                      const onChainChanged = async (chain) => {
                        if (parseInt(chain, 16) != CURRENT.eNetId) {
                          alert('Please switch wallet to Conflux eSpace netWork');
                          return;
                        }
                      };
                      window.ethereum?.on("accountsChanged", onAccountsChanged);
                      window.ethereum?.on("chainChanged", onChainChanged); 

                      const provider = new ethers.providers.Web3Provider(window.ethereum);
                      const account = _walletAccount; // accounts[0];

                      /*****************************end*********************************************** */

                      this.userInfo.account = account;
                      this.userInfo.connected = true;
                      this.eSpaceAccount = account;

                      // TODO watch on account change

                      await this.loadAllUserInfo();

                      this.contract.setESpaceProvider(provider);

                      let blockNumber = await provider.getBlockNumber()
                      this.eSpaceBlockNumber = blockNumber;
                }
            }
          } catch (error) {
            if (error.code !== -32000 && error.code!==-32002)
             alert(error.message)
           }
    
        },
    
        async loadAllUserInfo() {
          this.loadUserInfo();
          this.loadUserLockingList();
          this.loadUserUnlockingList();
        },
    
        mapQueueItem(item) {
          let now = new Date().getTime();
          let unlockTime;
          if (this.isCore()) {
            let unlockBlockNumber = Number(item.endBlock) - this.chainStatus.blockNumber;
            unlockTime = new Date(now + unlockBlockNumber / 2 * 1000);
          } else {
            let unlockBlockNumber = Number(item.endBlock) - this.eSpaceBlockNumber;
            console.log(674,unlockBlockNumber)
            unlockTime = new Date(now + unlockBlockNumber * 1000*1.15);
          }
          return {
            amount: voteToCFX(item.votePower),
            endTime: formatDateTime(unlockTime),
          }
        },
    
        async loadUserInfo() {
          const userSummary = await this.contract.userSummary(this.userInfo.account);
          this.userInfo.votes = userSummary.votes;
          this.userInfo.available = userSummary.available;
          this.userInfo.locked = userSummary.locked;
          this.userInfo.unlocked = userSummary.unlocked;
    
          const userInterest = await this.contract.userInterest(this.userInfo.account);
          this.userInfo.userInterest = trimPoints(TreeGraph.Drip(userInterest.toString()).toCFX());
    
          const balance = await this.contract.getBalance(this.userInfo.account);
          this.userInfo.balance = trimPoints(TreeGraph.Drip(balance.toString()).toCFX());
        },
    
        // only need load once
        async loadPoolMetaInfo() {
          this.poolInfo.name = await this.contract.poolName();
          this.poolInfo.userShareRatio = await this.contract.poolUserShareRatio();
          let poolPosAddress = await this.contract.posAddress();
          this.poolInfo.posAddress = TreeGraph.format.hex(poolPosAddress);
        },
    
        async loadPosNodeStatus() {
          const account = await coreClient.pos.getAccount(this.poolInfo.posAddress);
          this.poolInfo.status = account.status;
        },
    
        async loadPoolInfo() {
          const poolSummary = await this.contract.poolSummary();
          this.poolInfo.totalLocked = poolSummary.available * BigInt(ONE_VOTE_CFX) * BigInt("1000000000000000000");
          this.poolInfo.totalRevenue = poolSummary.totalInterest;
          this.poolInfo.apy = Number(await this.contract.poolAPY()) / 100;
    
          const stakerNumber = await this.contract.stakerNumber();
          this.poolInfo.stakerNumber = stakerNumber.toString();
        },
    
        async loadLastRewardTime() {
          const { epoch } = await coreClient.pos.getStatus();
          let lastReward = await coreClient.pos.getRewardsByEpoch(epoch - 1);
          if (!lastReward) {
            lastReward = await coreClient.pos.getRewardsByEpoch(epoch - 2);
          }
          const block = await coreClient.cfx.getBlockByHash(lastReward.powEpochHash, false);
          this.poolInfo.lastRewardTime = block.timestamp;
        },
    
        async loadUserLockingList() {
          let list = await this.contract.userInQueue(this.userInfo.account);
          this.userInfo.userInQueue = list.map(this.mapQueueItem);
        },
    
        async loadUserUnlockingList() {
          let list = await this.contract.userOutQueue(this.userInfo.account);
          this.userInfo.userOutOueue = list.map(this.mapQueueItem);
        },
    
        async loadUserNFTInfo() {
          if (!CURRENT.nftAddress) return;
          nftContract = coreClient.Contract({
            abi: PoSNFTABI,
            address: CURRENT.nftAddress
          });
          const count = await nftContract.balanceOf(this.userInfo.account);
          this.userInfo.nftCount = Number(count.toString());
        },
    
        async stake() {
          if (this.stakeCount === 0 || this.stakeCount % ONE_VOTE_CFX != 0) {
            alert('Stake count should be multiple of 1000');
            return;
          }
          if (Number(this.userInfo.balance) < Number(this.stakeCount)) {
            alert('Insufficient balance');
            return;
          }
    
          const hash = await this
            .contract
            .increaseStake(this.stakeCount, this.userInfo.account);
          this.txHash = hash;
          hashModal.show();
    
          this.contract.waitTx(hash).then(receipt => {
            hashModal.hide();
            if (receipt.status === 0) { // success
              this.loadUserInfo();
              this.loadUserLockingList();
              this.stakeCount = 0;  // clear stake count
            } else {
              alert('Stake failed');
            }
          });
        },
    
        async claim() {
          if (this.userInfo.userInterest == 0) {
            alert('No claimable interest');
            return;
          }
          let hash = await this
            .contract
            .claimAllInterest(this.userInfo.account);
          this.txHash = hash;
          hashModal.show();
    
          this.contract.waitTx(hash).then(receipt => {
            hashModal.hide();
            if (receipt.status === 0) {
              this.loadUserInfo();
            } else {
              alert('Claim failed');
            }
          });
        },
    
        async unstake() {
          if (this.userInfo.locked === BigInt(0)) {
            alert('No unstakeable funds');
            return;
          }
          if (this.unstakeCount === 0 || this.unstakeCount % ONE_VOTE_CFX != 0) {
            alert('Unstake count should be multiple of 1000');
            return;
          }
          const unstakeVotePower = this.unstakeCount / ONE_VOTE_CFX;
    
          let hash = await this
            .contract
            .decreaseStake(unstakeVotePower, this.userInfo.account);
    
          this.txHash = hash;
          hashModal.show();
    
          this.contract.waitTx(hash).then(receipt => {
            hashModal.hide();
            if (receipt.status === 0) {
              this.loadUserInfo();
              this.loadUserUnlockingList();
              this.unstakeCount = 0;  // clear unstake count
            } else {
              alert('UnStake failed');
            }
          });
        },
    
        async withdraw() {
          if (this.userInfo.unlocked === BigInt(0)) {
            alert('No withdrawable funds');
            return;
          }
    
          try {
            console.log(488, Number(this.userInfo.unlocked), this.userInfo.unlocked, this.userInfo.account, 'aaaaaaaaaaaaaaaaa')
            let hash = await this
              .contract
              .withdrawStake(Number(this.userInfo.unlocked), this.userInfo.account);
            //.withdrawStake(12, this.userInfo.account);
            // .withdrawStake(this.userInfo.unlocked, this.userInfo.account);
            console.log(492, hash)
            this.txHash = hash;
            hashModal.show();
            console.log(495)
            this.contract.waitTx(hash).then(receipt => {
              hashModal.hide();
              if (receipt.status === 0) {
                this.loadUserInfo();
              } else {
                alert('Withdraw failed');
              }
            });
          } catch (err) {
            console.log(506, err)
            console.log("The unlock time is estimated by PoW block number is not very accurate. Your votes is still unlocking, please try again several hours later", err);
            withdrawModal.show();
          }
        },
        async withdraw2() {
      
    
          try {
            console.log(488, Number(this.userInfo.unlocked), this.userInfo.unlocked, this.userInfo.account, 'aaaaaaaaaaaaaaaaa')
            let hash = await this
              .contract
              .withdrawStake(1, this.userInfo.account);
            //.withdrawStake(12, this.userInfo.account);
            // .withdrawStake(this.userInfo.unlocked, this.userInfo.account);
            console.log(492, hash)
            this.txHash = hash;
            hashModal.show();
            console.log(495)
            this.contract.waitTx(hash).then(receipt => {
              hashModal.hide();
              if (receipt.status === 0) {
                this.loadUserInfo();
              } else {
                alert('Withdraw failed');
              }
            });
          } catch (err) {
            console.log(506, err)
            console.log("The unlock time is estimated by PoW block number is not very accurate. Your votes is still unlocking, please try again several hours later", err);
            withdrawModal.show();
          }
        },
        loadRewardChartData() {
          let posAddress = this.poolInfo.posAddress;
          const url = `${CURRENT.scanURL}/stat/list-pos-account-reward?identifier=${posAddress}&limit=20&orderBy=createdAt&reverse=true`;
          fetch(url)
            .then(response => response.json())
            .then(initLineChart);
        }
      }
    };
    
    Vue.createApp(PoSPool).mount('#app');
    
    function initLineChart(rewards) {
      return;
      const { list } = rewards;
      if (list.length === 0) return;
      const labels = list.map(item => formatTime(new Date(item.createdAt)));
      const items = list.map(item => {
        const formated = formatUnit(item.reward, 'CFX');
        const onlyValue = formated.split(' ')[0];
        return Number(onlyValue);
      });
    
      const data = {
        labels: labels.reverse(),
        datasets: [{
          label: 'Rewards Per Hour (CFX)',
          backgroundColor: 'rgb(66, 184, 131)',
          borderColor: 'cornflowerblue',
          data: items.reverse(),
        }]
      };
    
      const config = {
        type: 'line',
        data: data,
        options: {}
      };
    
      document.getElementById('rewardChartContainer').removeAttribute('style');
      const chartEle = document.getElementById('rewardChart')
      const rewardChart = new Chart(chartEle, config);
      return rewardChart;
    }
  
  
  });
  
  
   

},1000) 
 
  