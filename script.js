// 🌳 質問の樹形図（分岐ロジック）を定義 - 5段階 (Q1, Q2, Q3, Q4, Q5)
const quizTree = {
    // Stage 1 (Q1) - 大分類
    'Q1': {
        q: "Q1. 海に関わる活動で、一番ワクワクするのは？",
        A: { text: "海の知識を深めたり、新しい仕組みを考え出すこと。", next: 'Q2_A' },
        B: { text: "海で実際に体を動かしたり、人と関わりながら何かをすること。", next: 'Q2_B' }
    },
    
    // Stage 2 (Q2)
    'Q2_A': {
        q: "Q2. どちらの「解明」や「創造」に興味がありますか？",
        A: { text: "誰も知らない「海のナゾ」を徹底的に調べたり、データ分析で原因を突き止める。", next: 'Q3_AA' }, // RED
        B: { text: "船や機械、海底設備などの「仕組み」を設計したり、形にすること。", next: 'Q3_AB' }  // TECH
    },
    'Q2_B': {
        q: "Q2. どちらの環境で働くのが好きですか？",
        A: { text: "現場で汗を流し、船の運航や設備の保守など「モノ」や「人」を直接支える。", next: 'Q3_BA' },  // FIELD
        B: { text: "お金やルールを考えたり、多くの人をまとめて「組織」を動かす。", next: 'Q3_BB' }   // MGT
    },

    // Stage 3 (Q3)
    'Q3_AA': {
        q: "Q3. 研究のテーマは？",
        A: { text: "未来のエネルギーや、自動化システムなど「技術」に関するナゾ。", next: 'Q4_AAA' },
        B: { text: "生き物、環境汚染、ルール作りなど「環境・社会」に関するナゾ。", next: 'Q4_AAB' }
    },
    'Q3_AB': {
        q: "Q3. 設計したいのは？",
        A: { text: "AIやIoTを組み込んだ「自動化・IT」のシステムや機器。", next: 'Q4_ABA' },
        B: { text: "船の構造や風力発電の土台など「物理的な構造物」や設備。", next: 'Q4_ABB' }
    },
    'Q3_BA': {
        q: "Q3. 現場でどんな役割を果たしたい？",
        A: { text: "船長として安全を管理したり、漁業・養殖など「資源」に関わる作業。", next: 'Q4_BAA' },
        B: { text: "船や設備を「修理・設置」したり、技術的な作業を行うこと。", next: 'Q4_BAB' }
    },
    'Q3_BB': {
        q: "Q3. 会社のどういう部分を動かしたい？",
        A: { text: "事業の「お金」や「計画」を立て、トップの意思決定を支える。", next: 'Q4_BBA' },
        B: { text: "会社の「環境対応」や「調達」など、ルールや物を管理する。", next: 'Q4_BBB' }
    },

    // Stage 4 (Q4) - Q5へのリンクを16個に分岐
    'Q4_AAA': { q: "Q4. 未来の技術のなかで、特に力を入れたいのは？", A: { text: "AIや自動運航データの解析。", next: 'Q5_A' }, B: { text: "脱炭素燃料や環境技術の研究。", next: 'Q5_B' } },
    'Q4_AAB': { q: "Q4. 研究テーマは？", A: { text: "船の構造や材料の「耐久性」や「腐食」を防ぐ研究。", next: 'Q5_C' }, B: { text: "船の航路や安全性を高めるための「データ分析」。", next: 'Q5_D' } },
    'Q4_ABA': { q: "Q4. 開発したいのは？", A: { text: "AIカメラなど「自動化・IT」機器。", next: 'Q5_E' }, B: { text: "故障を予測する「予防保全」システム。", next: 'Q5_F' } },
    'Q4_ABB': { q: "Q4. どちらの設計が得意？", A: { text: "船の構造や推進器など「構造・推進」。", next: 'Q5_G' }, B: { text: "古い船を新しいシステムに「改造・転換」させる。", next: 'Q5_H' } },
    'Q4_BAA': { q: "Q4. 現場で貢献したいのは？", A: { text: "船を安全に運航させる「船長・運航」の役割。", next: 'Q5_I' }, B: { text: "魚や海藻を育てる「漁業・養殖」の管理。", next: 'Q5_J' } },
    'Q4_BAB': { q: "Q4. 現場技術のテーマは？", A: { text: "壊れた船や設備を「修理・メンテナンス」する。", next: 'Q5_K' }, B: { text: "洋上風力などの「建設・設置工事」を行う。", next: 'Q5_L' } },
    'Q4_BBA': { q: "Q4. 管理したいのは？", A: { text: "新しい事業を立ち上げるための「計画・評価」。", next: 'Q5_M' }, B: { text: "会社全体の「財務・経理」や「資金」の流れ。", next: 'Q5_N' } },
    'Q4_BBB': { q: "Q4. ルールや物を扱うのは？", A: { text: "環境に配慮した経営を推進する「サステナビリティ」。", next: 'Q5_O' }, B: { text: "必要な部品や材料を集める「調達・サプライチェーン」。", next: 'Q5_P' } },

    // Stage 5 (Q5) - 16個のノード。最後のクリックで結果が表示される
    // Q5_AからQ5_Pまで、それぞれが最終結果（result）を保持
    
    // RED系 Q5
    'Q5_A': { q: "Q5. 最終判断！【未来技術の研究者】として、より情熱を注ぎたいのは？", A: { text: "AIを使った無人運航システムの実現", result: 'RED_TECH_A' }, B: { text: "アンモニアなど、環境に優しい新燃料の研究", result: 'RED_TECH_B' } },
    'Q5_B': { q: "Q5. 最終判断！【海洋環境の分析家】として、より情熱を注ぎたいのは？", A: { text: "船の構造が壊れないよう、材料を徹底的に調べる", result: 'RED_ENV_A' }, B: { text: "船から出る熱やゴミを減らす技術を研究する", result: 'RED_ENV_B' } },
    'Q5_C': { q: "Q5. 最終判断！【運航の最適化専門家】として、どちらに興味がありますか？", A: { text: "コンピューターで船の動きを計算し航路を提案", result: 'RED_OPT_A' }, B: { text: "データを使って最適な船のルートを設計", result: 'RED_OPT_B' } },
    'Q5_D': { q: "Q5. 最終判断！【海洋データ解析技術者】として、どちらに興味がありますか？", A: { text: "現実の海をコンピューターに再現する開発", result: 'RED_DATA_A' }, B: { text: "AIが船をサポートする画像認識技術の開発", result: 'RED_DATA_B' } },
    
    // TECH系 Q5
    'Q5_E': { q: "Q5. 最終判断！【自動化システムの設計者】として、どちらに興味がありますか？", A: { text: "高性能なAIカメラの製造・開発", result: 'TECH_IT_A' }, B: { text: "船の電気系統や自動で動く機械の製造", result: 'TECH_IT_B' } },
    'Q5_F': { q: "Q5. 最終判断！【IoT予防保全エンジニア】として、どちらに興味がありますか？", A: { text: "センサーで故障を予測するシステム開発", result: 'TECH_PREV_A' }, B: { text: "船のエンジンや機械の点検・修理を行う専門家", result: 'TECH_PREV_B' } },
    'Q5_G': { q: "Q5. 最終判断！【巨大設備の設計技術者】として、どちらに興味がありますか？", A: { text: "船の形やスクリュー（推進器）を設計", result: 'TECH_STR_A' }, B: { text: "洋上風力発電の土台（基礎構造物）を設計", result: 'TECH_STR_B' } },
    'Q5_H': { q: "Q5. 最終判断！【レトロフィット技術者】として、どちらに興味がありますか？", A: { text: "古い船に最新システムを取り付ける改造", result: 'TECH_CONV_A' }, B: { text: "風力発電のタービン（羽根）を設計", result: 'TECH_CONV_B' } },

    // FIELD系 Q5
    'Q5_I': { q: "Q5. 最終判断！【運航・安全管理者】として、どちらに興味がありますか？", A: { text: "船を操縦し目的地へ運ぶ海のリーダー（船長など）", result: 'FIELD_SAFE_A' }, B: { text: "船や設備の安全性を確保するための計画を立てる", result: 'FIELD_SAFE_B' } },
    'Q5_J': { q: "Q5. 最終判断！【漁業・養殖オペレーター】として、どちらに興味がありますか？", A: { text: "IT技術も使い魚を獲る漁業オペレーション", result: 'FIELD_FISH_A' }, B: { text: "魚や海藻などを育てる養殖場管理", result: 'FIELD_FISH_B' } },
    'Q5_K': { q: "Q5. 最終判断！【修繕・メンテナンス職人】として、どちらに興味がありますか？", A: { text: "船や海洋設備を定期的に点検・修理", result: 'FIELD_REP_A' }, B: { text: "船の故障や損傷した部分を専門的に修繕", result: 'FIELD_REP_B' } },
    'Q5_L': { q: "Q5. 最終判断！【海洋建設・設置作業員】として、どちらに興味がありますか？", A: { text: "遠隔操作のロボットで海底の建設作業", result: 'FIELD_CON_A' }, B: { text: "洋上風力発電の羽根や設備を点検する作業", result: 'FIELD_CON_B' } },

    // MGT系 Q5
    'Q5_M': { q: "Q5. 最終判断！【分野横断の経営管理者】として、どちらに興味がありますか？", A: { text: "様々な部門や行政と連携をとり事業を成功に導く", result: 'MGT_EXEC_A' }, B: { text: "事業が環境に与える影響を評価し対策を立てる", result: 'MGT_EXEC_B' } },
    'Q5_N': { q: "Q5. 最終判断！【財務・事業計画担当】として、どちらに興味がありますか？", A: { text: "会社の予算や資金を管理しお金の流れをコントロール", result: 'MGT_FIN_A' }, B: { text: "新しい事業が儲かるかどうか分析・評価", result: 'MGT_FIN_B' } },
    'Q5_O': { q: "Q5. 最終判断！【サステナビリティ管理者】として、どちらに興味がありますか？", A: { text: "ブルーカーボン取引の仕組みを管理", result: 'MGT_ESG_A' }, B: { text: "環境や社会に配慮した経営を行い認証を取得", result: 'MGT_ESG_B' } },
    'Q5_P': { q: "Q5. 最終判断！【調達・サプライチェーン担当】として、どちらに興味がありますか？", A: { text: "部品を作る会社や運ぶ会社と協力し効率を上げる", result: 'MGT_PROC_A' }, B: { text: "船に必要なIT機器を品質や価格を見て買い付ける", result: 'MGT_PROC_B' } }
};

// 最終結果と仕事内容の定義（32パターン）
const results = {
    // RED (研究・開発・分析)
    'RED_TECH_A': { title: "未来技術の研究者", desc: "AIやITを使い、無人で船を動かすシステムを開発する仕事。", name: "自律運航・遠隔運航研究者", detail: "AIやITを使い、無人で船を動かすシステムを開発する専門家。" },
    'RED_TECH_B': { title: "未来技術の研究者", desc: "二酸化炭素を出さない新しい燃料や技術（アンモニア等）を研究する仕事。", name: "燃料転換・脱炭素推進研究者", detail: "二酸化炭素を出さない新しい燃料や技術（アンモニア等）を研究する。" },
    'RED_ENV_A': { title: "海洋環境の分析家", desc: "船や海の施設が壊れないよう、材料の強度や腐食を防ぐ方法を研究する仕事。", name: "構造・耐久・腐食研究者", detail: "船や海の施設が壊れないよう、材料の強度や腐食を防ぐ方法を研究する。" },
    'RED_ENV_B': { title: "海洋環境の分析家", desc: "船から出る熱やゴミを減らし、海を汚さない技術を研究する仕事。", name: "廃熱・排水・廃棄物ゼロ化研究者", detail: "船から出る熱やゴミを減らし、海を汚さない技術を研究する。" },
    'RED_OPT_A': { title: "運航の最適化専門家", desc: "コンピューターで船の動きを計算し、燃料が一番少なくて済む航路を提案する仕事。", name: "運航最適化シミュレーション専門家", detail: "コンピューターで船の動きを計算し、燃料が一番少なくて済む航路を提案する。" },
    'RED_OPT_B': { title: "運航の最適化専門家", desc: "データを使って最適な船のルートを設計し、安全性を高める仕事。", name: "航路設計・最適化解析技術者", detail: "データを使って最適な船のルートを設計し、安全性を高める専門家。" },
    'RED_DATA_A': { title: "海洋データ解析技術者", desc: "現実の船や海をコンピューターの中に再現し、シミュレーションを行う仕事。", name: "デジタルツイン開発者", detail: "現実の船や海をコンピューターの中に再現し、シミュレーションを行う技術者。" },
    'RED_DATA_B': { title: "海洋データ解析技術者", desc: "AIが船の周りの状況を理解し、自動で操縦をサポートする技術を開発する仕事。", name: "AI操船・画像認識エンジニア", detail: "AIが船の周りの状況を理解し、自動で操縦をサポートする技術を開発する。" },
    
    // TECH (技術・設計・製造)
    'TECH_IT_A': { title: "自動化システムの設計者", desc: "船や水中での監視・認識に使われる高性能なAIカメラを作る仕事。", name: "AIカメラ製造者", detail: "船や水中での監視・認識に使われる高性能なAIカメラを作る技術者。" },
    'TECH_IT_B': { title: "自動化システムの設計者", desc: "船の電気系統や、自動で動く機械を作る仕事。", name: "船舶電装・自動化機器製造者", detail: "船の電気系統や、自動で動く機械を作る技術者。" },
    'TECH_PREV_A': { title: "IoT予防保全エンジニア", desc: "センサーで集めたデータから、機械の故障を予測し、メンテナンスの計画を立てる仕事。", name: "予防保全・IoT監視エンジニア", detail: "センサーで集めたデータから、機械の故障を予測し、メンテナンスの計画を立てる。" },
    'TECH_PREV_B': { title: "IoT予防保全エンジニア", desc: "船のエンジンや機械が故障しないよう、点検・修理を行う専門家。", name: "舶用機器メンテナンスエンジニア", detail: "船のエンジンや機械が故障しないよう、点検・修理を行う専門家。" },
    'TECH_STR_A': { title: "巨大設備の設計技術者", desc: "船の形や、水をかいて進むスクリュー（推進器）を設計する仕事。", name: "船体・推進設計技術者", detail: "船の形や、水をかいて進むスクリュー（推進器）を設計する専門家。" },
    'TECH_STR_B': { title: "巨大設備の設計技術者", desc: "洋上風力発電の、海底にある土台（基礎構造物）を設計する仕事。", name: "基礎構造物設計技術者", detail: "洋上風力発電の、海底にある土台（基礎構造物）を設計する。" },
    'TECH_CONV_A': { title: "レトロフィット技術者", desc: "古い船に最新の機械やシステムを取り付け、性能を向上させる現場の仕事。", name: "改造・レトロフィット現場技術者", detail: "古い船に最新の機械やシステムを取り付け、性能を向上させる現場の技術者。" },
    'TECH_CONV_B': { title: "レトロフィット技術者", desc: "海の上の風力発電のタービン（羽根）を設計する仕事。", name: "風力タービン設計技術者", detail: "海の上の風力発電のタービン（羽根）を設計する仕事。" },

    // FIELD (現場・オペレーション)
    'FIELD_REP_A': { title: "修繕・メンテナンス職人", desc: "船や海洋設備を定期的に点検し、トラブルがあれば現場で修理を行う仕事。", name: "保守・修繕技術者", detail: "船や海洋設備を定期的に点検し、トラブルがあれば現場で修理を行う。" },
    'FIELD_REP_B': { title: "修繕・メンテナンス職人", desc: "専門的な技術を使い、船の故障や損傷した部分を修繕する仕事。", name: "修繕技術者", detail: "専門的な技術を使い、船の故障や損傷した部分を修繕する技術者。" },
    'FIELD_FISH_A': { title: "漁業・養殖オペレーター", desc: "IT技術も使い、船を操縦しながら魚を獲り、安全で効率的な漁を行う仕事。", name: "漁業オペレーター", detail: "IT技術も使い、船を操縦しながら魚を獲り、安全で効率的な漁を行う。" },
    'FIELD_FISH_B': { title: "漁業・養殖オペレーター", desc: "魚や海藻などを育て、成長を管理し、病気にならないように世話をする仕事。", name: "養殖場管理者", detail: "魚や海藻などを育て、成長を管理し、病気にならないように世話をする。" },
    'FIELD_SAFE_A': { title: "運航・安全管理者", desc: "船を安全に操縦し、乗組員を指揮して目的地まで船を運ぶ海のリーダー。", name: "船長・操業員", detail: "船を安全に操縦し、乗組員を指揮して目的地まで船を運ぶ海のリーダー。" },
    'FIELD_SAFE_B': { title: "運航・安全管理者", desc: "船や設備の設計段階から、安全性を確保するための技術的な計画を立てる仕事。", name: "安全・設備設計技術者", detail: "船や設備の設計段階から、安全性を確保するための技術的な計画を立てる。" },
    'FIELD_CON_A': { title: "海洋建設・設置作業員", desc: "遠隔操作のロボットを使い、海底や洋上で精密な建設作業を行う仕事。", name: "ロボット施工・自動化オペレーター", detail: "遠隔操作のロボットを使い、海底や洋上で精密な建設作業を行う。" },
    'FIELD_CON_B': { title: "海洋建設・設置作業員", desc: "洋上風力発電の羽根や設備を点検し、安全を守る現場作業員。", name: "風力タービン点検作業員", detail: "洋上風力発電の羽根や設備を点検し、安全を守る現場作業員。" },

    // MGT (管理・企画・サステナビリティ)
    'MGT_FIN_A': { title: "財務・事業計画担当", desc: "会社の予算や資金を管理し、お金の流れをコントロールする仕事。", name: "ファイナンス担当", detail: "会社の予算や資金を管理し、お金の流れをコントロールする。" },
    'MGT_FIN_B': { title: "財務・事業計画担当", desc: "新しい事業が儲かるかどうか、リスクはないかを分析・評価する専門家。", name: "事業性評価担当", detail: "新しい事業が儲かるかどうか、リスクはないかを分析・評価する専門家。" },
    'MGT_ESG_A': { title: "サステナビリティ管理者", desc: "海草などが吸収したCO2（ブルーカーボン）を取引する仕組みを管理する専門家。", name: "ブルーカーボン取引専門家", detail: "海草などが吸収したCO2（ブルーカーボン）を取引する仕組みを管理する専門家。" },
    'MGT_ESG_B': { title: "サステナビリティ管理者", desc: "環境や社会に配慮した経営を行い、必要な認証（ISOなど）を取得する仕事。", name: "ESG・認証対応担当", detail: "環境や社会に配慮した経営を行い、必要な認証（ISOなど）を取得する。" },
    'MGT_PROC_A': { title: "調達・サプライチェーン担当", desc: "部品を作る会社や運ぶ会社と協力し、全体の効率を上げる仕事。", name: "サプライチェーン協働担当", detail: "部品を作る会社や運ぶ会社と協力し、全体の効率を上げる。" },
    'MGT_PROC_B': { title: "調達・サプライチェーン担当", desc: "船に必要なAIやIT機器を品質や価格を見て世界中から買い付ける仕事。", name: "海洋用電子機器調達担当", detail: "船に必要なAIやIT機器を品質や価格を見て世界中から買い付ける。" },
    'MGT_EXEC_A': { title: "分野横断の経営管理者", desc: "会社全体を見渡し、様々な部門や行政との連携をとり、事業を成功に導くリーダー。", name: "分野横断（マネジメント・事業・行政）", detail: "会社全体を見渡し、様々な部門や行政との連携をとり、事業を成功に導く。" },
    'MGT_EXEC_B': { title: "分野横断の経営管理者", desc: "事業が環境に与える影響を評価し、対策を立てる専門家。", name: "環境アセスメント担当官", detail: "事業が環境に与える影響を評価し、対策を立てる専門家。" }
};

let currentQuestionId = 'Q1'; 
let answeredCount = 0;

const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const jobDetails = document.getElementById('job-details');

// 質問を1問ずつ表示する関数
function displayQuestion(qId) {
    const qData = quizTree[qId];
    
    // Q1-Q5の質問ノードに到達した場合のみカウントを更新
    if (qId.startsWith('Q')) {
        answeredCount = parseInt(qId.substring(1).split('_')[0]); 
    }
    
    quizContainer.innerHTML = '';
    
    const questionBox = document.createElement('div');
    questionBox.classList.add('question-box');
    
    const displayCount = answeredCount; 

    questionBox.innerHTML = `
        <p class="question-title">質問 ${displayCount}/5: ${qData.q}</p>
        <button onclick="handleAnswer('${qId}', 'A')">${qData.A.text}</button>
        <button onclick="handleAnswer('${qId}', 'B')">${qData.B.text}</button>
    `;
    quizContainer.appendChild(questionBox);
    quizContainer.classList.remove('hidden');
    resultContainer.classList.add('hidden');
}

// 回答を処理し、次の質問へ進む関数
function handleAnswer(qId, choice) {
    const qData = quizTree[qId];
    const nextId = qData[choice].next;
    const finalResultKey = qData[choice].result; // Q5ノードでのみ存在する
    
    if (nextId) {
        // Q1〜Q4の回答
        currentQuestionId = nextId;
        displayQuestion(currentQuestionId); // 次の質問を表示
    } else if (finalResultKey) {
        // Q5の回答（最終クリック）
        displayResult(finalResultKey); // 結果を表示
    } else {
        // エラー処理
        alert("診断の処理中にエラーが発生しました。");
        restartQuiz();
    }
}

// 最終結果を表示する関数
function displayResult(resultKey) {
    const jobData = results[resultKey]; // 最終結果キーでデータ全体を取得
    
    // 系統名 (title) と説明をセット
    resultText.innerHTML = `あなたの適性は <strong>${jobData.title}</strong> の系統です！<br>${jobData.desc}`;

    // 最終的にたどり着いた職業を詳細表示
    jobDetails.innerHTML = `
        <h4>🌟 あなたにおすすめの海の仕事 🌟</h4>
        <h3>${jobData.name}</h3>
        <p>【仕事内容】${jobData.detail}</p>
    `;

    // 表示を切り替え
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
}

// 診断を最初からやり直す関数
function restartQuiz() {
    currentQuestionId = 'Q1';
    answeredCount = 0;
    displayQuestion(currentQuestionId);
}

// アプリ起動
restartQuiz();