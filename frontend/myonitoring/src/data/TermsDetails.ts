const termsDetails: Record<
  string,
  { title: string; content: Array<{ subtitle: string; text: string }> }
> = {
  termsOfService: {
    title: "서비스 이용 약관",
    content: [
      {
        subtitle: "제1조 목적",
        text: `이 약관은 먀이크로소프트(이하 '회사')가 제공하는 묘니터링(이하 '서비스')를 이용함에 있어 회사와 사용자 간의 권리ㆍ의무 및 책임사항을 규정함을 목적으로 합니다.\n서비스를 이용하고자 하는 자는 본 이용 약관을 자세히 읽은 후 이용 약관에 동의하지 않을 경우, 본 이용 약관에 동의 표시를 하거나 서비스에 등록 또는 액세스하거나 이를 이용(이하 '이용')하지 않아야 합니다.`,
      },
      {
        subtitle: "제2조 용어의 정의",
        text: `이 약관에서 사용하는 용어의 정의는 다음과 같습니다. 이 약관에서 사용하는 용어 중 본 조에서 정하지 아니한 것은 회사 사이트의 별도 페이지 안내 및 관계 법령에서 정하는 바에 따르며, 그 외에는 일반 상관례에 따릅니다.\n1. “회사”란 재화 또는 용역(이하 “재화 등”이라 함)을 사용하여 이용자에게 서비스를 제공할 목적으로 컴퓨터 등 정보통신설비를 이용하여 설정한 가상의 영업장을 말하며, 아울러 “회사”가 제작, 운영하는 모바일 어플리케이션 및 인터넷 웹사이트(이하 “사이트”)을 운영하는 사업자의 의미로도 사용합니다.\n2. “서비스”란 회사가 휴대용 단말기, 개인용 컴퓨터 등 전기통신설비를 포함한 각종 유무선 장치와 모바일 어플리케이션, 웹사이트를 통해 이용자에게 제공하는 디지털 콘텐츠 등 제반 서비스를 말합니다.\n 3. “이용자”란 “사이트”에 접속하여 이 약관에 따라 “회사”가 제공하는 “서비스”를 받는 회원 및 비회원을 말합니다.\n4. “회원”이란 회사와 이용계약을 체결하고 아이디(ID)를 부여 받은 이용자로서 회사의 정보를 제공받으며 회사가 제공하는 유ㆍ무상 서비스를 지속적으로 이용할 수 있는 자를 말합니다.`,
      },
      {
        subtitle: "제3조 약관 외 준칙",
        text: `1. 회사는 개별 서비스에 대하여 별도의 이용약관 및 운영정책 등을 둘 수 있으며, 해당 내용이 본 약관과 상충할 경우에는 별도의 이용약관 및 운영정책이 우선하여 적용됩니다.\n2. 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률 등 관계 법령 또는 상관례에 의합니다.`,
      },
      {
        subtitle: "제4조 약관의 명시와 설명 및 개정",
        text: `1. 회사는 이 약관의 내용을 회원이 쉽게 확인할 수 있도록 모바일 어플리케이션 및 웹사이트에 게시합니다.\n2. 이 약관은 이용자가 회원으로 가입하면서 이 약관에 동의함으로써 효력이 발생합니다.\n3. 회사는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률, 전자문서 및 전자거래기본법, 전자서명법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다. 회사가 약관을 개정할 경우에는 개정 약관 적용일 최소 7일 이전부터 사이트 내에서 회원에게 공지합니다. 다만 회원에게 불리하게 약관 내용을 변경하는 경우 최소 30일 이상의 유예기간을 두고 공지합니다.\n4. 본 약관은 수시로 개정될 수 있으므로 회원은 서비스 내에 공지된 약관의 최신 버전을 주기적으로 확인하여야 합니다. `,
      },
      {
        subtitle: "제5조 서비스의 제공 및 변경",
        text: `1. 회사는 이용자에게 모바일 어플리케이션과 웹사이트를 통해 디지털 콘텐츠 및 제반 서비스를 제공합니다.\n2. 회사는 재화 또는 용역의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화 또는 용역의 내용을 변경할 수 있습니다.\n3. “회사”가 제공하는 서비스의 형태와 기능, 디자인 등은 필요한 경우 변경되거나 중단될 수 있습니다. 회사는 이 경우 개별적인 변경에 대하여 회원에게 사전 통지하지 않습니다. 다만, 회원에게 불리한 것으로 판단되는 경우 서비스 내 게시 혹은 전자우편을 통하여 이를 공지합니다.\n4. 전항의 경우 회사는 이로 인하여 회원이 입은 손해를 배상합니다. 다만, 회사가 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.`,
      },
      {
        subtitle: "제6조 서비스의 중단",
        text: `1. 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. 이 경우 제11조(회원에 대한 통지)에 정한 방법으로 이용자에게 통지합니다. 다만, 회사가 사전에 통지할 수 없는 부득이한 사유가 있는 경우 사후에 통지할 수 있습니다.\n2. 회사는 서비스의 제공에 필요한 경우 정기점검을 실시할 수 있으며, 정기점검시간은 서비스제공화면에 공지한 바에 따릅니다.\n3. 사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에는 회사는 제11조에 정한 방법으로 회원에게 통지하고 당초 회사에서 제시한 조건에 따라 소비자에게 보상합니다. 다만, 회사가 보상기준 등을 고지하지 아니한 경우에는 회원들의 마일리지 또는 적립금 등을 회사에서 통용되는 통화가치에 상응하는 현물 또는 현금으로 회원에게 지급합니다.`,
      },
      {
        subtitle: "제7조 회원가입",
        text: `1. 회원가입은 이용자가 약관의 내용에 대하여 동의를 하고 회원가입신청을 한 후 회사가 이러한 신청에 대하여 승낙함으로써 체결됩니다.\n2. 회사는 제1항과 같이 회원으로 가입할 것을 신청한 회원이 다음 각호에 해당하지 않는 한 신청을 수락합니다.\n(1) 가입신청자가 이 약관 제9조 제3항에 의하여 이전에 회원등록이 말소된 적이 있는 경우. 다만 제9조 제3항에 의한 회원등록 말소 후 3년이 경과한 자로서 회사의 회원 재가입 승낙을 얻은 경우에는 예외로 함.\n(2) 부정한 목적으로 타인의 명의를 이용한 경우\n(3) 허위의 정보를 기재하거나 회사가 제시하는 내용을 기재하지 않는 경우\n(4) 기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우\n(5) 만 14세 미만의 아동이 회원가입 신청을 한 경우\n3. 회원가입 계약의 성립시기는 회사의 승낙이 회원에게 도달한 시점으로 합니다.`,
      },
      {
        subtitle: "제8조 회원 탈퇴 및 자격 상실 등",
        text: `1. 회원이 다음 각호의 사유에 해당하는 경우, 회사는 회원자격을 제한 및 정지시킬 수 있습니다.\n(1) 가입 신청시에 허위 내용을 기입한 경우\n(2) 회사를 이용하여 구입한 재화 등의 대금 등 회원이 부담하는 채무를 기일에 지급하지 않는 경우\n(3) 다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우\n(4) 회사를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우\n2. 회사가 회원자격을 제한ㆍ정지시킨 후, 동일한 행위가 2회 이상 반복되거나 14일 이내에 그 사유가 시정되지 아니하는 경우 회사는 회원자격을 상실시킬 수 있습니다.\n3. 회사가 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 최소한 14일 이상의 기간을 정하여 소명할 기회를 부여합니다.`,
      },
      {
        subtitle: "제9조 아이디 및 비밀번호의 관리",
        text: `1. 아이디(ID) 및 비밀번호에 대한 관리 책임은 회원에게 있으며, 회원은 어떠한 경우에도 본인의 아이디(ID) 또는 비밀번호를 타인에게 양도하거나 대여할 수 없습니다.\n2. 회사의 귀책사유 없이 아이디(ID) 또는 비밀번호의 유출, 양도, 대여로 인하여 발생하는 손실이나 손해에 대하여는 회원 본인이 그에 대한 책임을 부담합니다.\n3. 회원은 아이디(ID) 또는 비밀번호를 도난당하거나 제3자가 무단으로 이를 사용하고 있음을 인지한 경우, 이를 즉시 회사에 통보하여야 하고 회사는 이에 대한 신속한 처리를 위하여 최선의 노력을 다합니다.`,
      },
      {
        subtitle: "제10조 회원에 대한 통지",
        text: `1. 회사가 회원에 대한 통지를 하는 경우, 회원이 회사와 미리 약정하여 지정한 전자우편 주소로 할 수 있습니다.\n2. 회사는 불특정다수 회원에 대한 통지의 경우 1주일 이상 회사 공지사항에 게시함으로써 개별 통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 개별통지를 합니다.`,
      },
      {
        subtitle: "제11조 회사의 의무",
        text: `1. 회사는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화ㆍ용역을 제공하는데 최선을 다하여야 합니다.\n2. 회사는 회원이 안전하게 서비스를 이용할 수 있도록 회원의 개인정보보호를 위한 보안 시스템을 갖추어야 하며 개인정보처리방침을 공시하고 준수합니다.\n3. 회사는 계속적이고 안정적인 서비스의 제공을 위하여 서비스 개선을 하던 중 설비에 장애가 생기거나 데이터 등이 멸실ㆍ훼손된 때에는 천재지변, 비상사태, 현재의 기술로는 해결이 불가능한 장애나 결함 등 부득이한 사유가 없는 한 지체 없이 이를 수리 또는 복구하도록 최선의 노력을 다합니다.`,
      },
      {
        subtitle: "제12조 회원의 의무",
        text: `1. 회원은 다음 행위를 하여서는 안됩니다.\n(1) 신청 또는 변경 시 허위 내용의 등록\n(2) 타인의 정보 수집, 저장, 게시, 유포\n(3) 회사가 게시한 정보의 변경\n(4) 회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시\n(5) 회사 기타 제3자의 저작권, 영업비밀, 특허권 등 지식재산권에 대한 침해\n(6) 회사와 다른 회원 및 기타 제3자를 희롱하거나 위협하거나 명예를 손상시키거나 업무를 방해하는 행위\n(7) 기타 현행 법령에 위반되는 불법적인 행위\n2. 회사는 회원이 전항에서 금지한 행위를 하는 경우 위반 행위의 경중에 따라 서비스의 이용정지, 계약 해지 등의 서비스 이용 제한, 손해배상청구, 수사기관 고발 등 합당한 조치를 취할 수 있습니다.`,
      },
      {
        subtitle: "제13조 저작권의 귀속 및 이용제한",
        text: `1. 회사가 작성한 저작물에 대한 저작권 기타 지식재산권은 회사에 귀속합니다.\n2. 회사를 이용함으로써 얻은 정보 중 회사에게 지식재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.`,
      },
      {
        subtitle: "제14조 책임 제한 및 면책 조항",
        text: `1. 회사는 천재지변 또는 기간 통신 사업자의 회선 장애 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.\n2. 회사는 회원의 귀책사유로 인하여 발생한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.\n3. 회사는 회원이 서비스와 관련하여 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.\n4. 회사는 무료로 제공되는 서비스 이용과 관련하여 관련 법령에 특별한 규정이 없는 한 책임을 지지 않습니다.\n5. 회사는 회원 상호 간 또는 회원과 제3자 상호 간에 서비스를 매개로 하여 발생한 분쟁 등에 대하여 책임을 지지 않습니다.\n6. 회사는 회원의 모바일 환경이나 회사의 관리 범위에 있지 아니한 보안 문제로 인하여 발생하는 제반 문제 또는 현재의 보안 기술 수준으로 방어가 곤란한 네트워크 해킹 등 회사의 귀책 사유 없이 발생하는 문제에 대하여 책임을 지지 않습니다.`,
      },
      {
        subtitle: "제15조 재판권 및 준거법",
        text: `1. 회사와 회원 간에 발생한 분쟁에 관한 소송은 민사소송법상의 관할 법원에 제소합니다.\n2. 회사와 회원 간에 발생한 분쟁에 대하여는 대한민국 법을 적용합니다.`,
      },
      {
        subtitle: "부칙",
        text: `이 약관은 2025년 2월 10일부터 적용됩니다. 단, 본 약관의 공지 이후 시행일 이전에 본 약관에 동의한 경우에는 동의시부터 본 약관이 적용됩니다.`,
      },
    ],
  },
  privacyPolicy: {
    title: "개인정보 수집 및 이용 약관",
    content: [
      {
        subtitle: "개인정보처리방침의 의의",
        text: "먀이크로소프트트(이하 ‘회사’)는 개인정보보호법, 통신비밀보호법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 ‘정보통신망법’)을 비롯한 모든 개인 정보 보호에 관련된 법률 규정 및 국가 기관이 제정한 고시, 훈령, 지침 등을 준수합니다. 본 개인정보처리방침은 회사가 어떤 정보를 수집하고, 수집한 정보를 어떻게 사용하며, 필요에 따라 누구와 이를 공유(‘위탁 또는 제공’)하며, 이용목적을 달성한 정보를 언제·어떻게 파기하는지 등 ‘개인정보’와 관련한 내용을 투명하게 제공합니다.",
      },
      {
        subtitle: "개인정보의 수집 및 이용에 대한 동의",
        text: "회사는 적법한 방법에 의하여 서비스 이용 계약의 성립 및 이행에 필요한 최소한의 개인정보와 이용자의 식별이 가능한 정보를 수집하기 위하여 회원 가입시 개인정보의 수집 및 이용 관련 사항이 포함된 개인정보처리방침을 제공하고 이용자가 ‘동의’ 버튼을 선택하면 이에 동의한 것으로 봅니다.",
      },
      {
        subtitle: "제1조 개인정보의 수집항목 및 수집방법",
        text: "1. 개인정보의 수집항목\n회원 가입시\n-소셜 로그인을 통한 회원 가입시 사용한 본인 명의의 소셜 미디어 아이디(혹은 이메일 주소 형식의 아이디)와 성명(혹은 별명), 프로필이미지, 소셜 로그인 생성 번호\n-이메일을 통한 회원 가입시 사용한 이메일 주소, 비밀번호와 성명(혹은 별명) 자동생성정보 서비스 이용 과정에서 아래와 같은 정보들이 생성, 수집될 수 있습니다.\n-앱 푸시 권한\n-휴대전화 및 스마트OS 탑재 기기의 모델명, OS 정보, 디바이스 토큰(Device Token), 구글 광고 식별자(ADID), 애플 광고 식별자(IDFA)\n-IP 주소, 쿠키, 방문 일시, 불량 이용 기록, 서비스 이용 기록 유료 서비스 결제시 결제 등을 위해 불가피하게 필요한 경우 신용카드 정보, 무통장입금 정보, 통신사 정보, 선물권 번호, 기타 결제 관련 정보가 수집될 수 있습니다. 이벤트, 프로모션, 경품 발송, 서비스 이용 문의시 수집하는 개인정보의 이용 목적과 보관 기간 등을 별도 안내하고 동의를 받아 추가 정보가 수집될 수 있습니다.\n2. 개인정보의 수집 방법 회사는 개인정보를 수집하는 경우 반드시 사전에 이용자에게 수집·이용 목적, 수집 항목, 보유·이용 기간 등에 대하여 안내하고 동의를 구하고 있으며, 다음과 같은 방법을 통하여 개인정보를 수집합니다.\n-회원 가입 및 서비스 이용 과정에서 이용자가 개인정보 수집·이용에 대하여 동의하고 직접 정보를 입력하는 경우\n제휴 서비스 등으로 인하여 제휴·협력사 등으로부터 제공받는 경우\n-자동 생성정보는 모바일 어플리케이션, 웹사이트 등의 이용 과정에서 자동으로 생성되어 수집되는 경우\n-기타 서비스 이용 과정에서 사용자의 자발적 동의 및 제공을 통한 수집",
      },
      {
        subtitle: "제2조 개인정보의 수집목적",
        text: "회사는 수집한 개인정보를 다음의 목적으로 활용합니다.\n1.	서비스 제공에 관한 계약 이행, 유료 서비스 제공에 따른 요금 정산과 콘텐츠 제공, 유료 서비스 이용에 대한 과금, 구매 및 요금 결제\n2.	회원제 서비스 이용에 따른 개인 식별, 부정 이용 방지, 중복 가입 확인, 분쟁 조정을 위한 기록 보존, 불만 처리 등 민원 처리, 고지 사항 전달\n3.	신규 서비스 개발 및 맞춤 서비스 제공, 서비스 유효성 확인, 접속 빈도 파악, 회원의 서비스 이용에 대한 통계, 이벤트 및 광고성 정보 제공",
      },
      {
        subtitle: "제3조 개인정보의 보유 및 이용기간",
        text: "회사는 회원이 탈퇴를 요청하거나 개인신용정보 수집ㆍ이용에 대한 동의를 철회하는 경우, 수집ㆍ이용 목적이 달성되거나 보유기간이 종료한 경우에는 해당 개인신용정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래에 명시한 기간 동안 보존할 수 있습니다.\n1. 회원 가입 및 관리 : 회원 가입 시점부터 회원 탈퇴시까지 (다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료시까지)\n2. 관계 법령 위반에 따른 수사/조사 등이 진행 중인 경우에는 해당 수사/조사 종료 시까지\n3. 환불, 환급 등 채권/채무관계 정산 시까지 이름, 휴대전화번호, 계좌번호 등의 필수적 정보를 이용\n4. 서비스 제공 : 서비스 공급 완료 및 요금결제/정산 완료 시까지 (다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료 시까지)\n- 전자금융거래에 관한 기록 : 5년\n-계약 또는 청약철회, 대금결제, 재화 등의 공급기록 : 5년\n- 소비자 불만 또는 분쟁처리에 관한 기록 : 3년\n- 표시/광고에 관한 기록 : 6개월\n- 웹사이트 방문 기록 : 3개월\n- 광고ㆍ마케팅 : 동의 철회 또는 회원 탈퇴시까지\n 어플리케이션을 삭제하더라도 회원탈퇴 요청을 하지 않을 경우에는 개인정보가 삭제되지 않고 남아 있을 수 있습니다. 개인정보의 완전한 삭제를 원하시면 반드시 회원탈퇴를 요청하시기 바랍니다.",
      },
      {
        subtitle:
          "제4조 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항",
        text: "1. 회사는 회원들에게 특화된 맞춤서비스 등을 제공하기 위해서 이용자의 정보를 수시로 저장하고 찾아내는 '쿠키 (Cookie, 접속정보파일)' 등을 운용할 수 있습니다. 회사는 쿠키 운용과 관련하여 이용자의 컴퓨터는 식별하지만 이용자를 개인적으로 식별하지는 않습니다.\n2. 모바일 어플리케이션과 같이 쿠키 기능을 사용할 수 없는 경우에는 쿠키와 유사한 기능을 수행하는 기술(광고식별자 등)을 사용할 수도 있습니다.\n- 쿠키 등의 사용 목적 : 이용자의 접속빈도나 방문시간 등을 분석, 이용자의 취향과 관심 분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공\n- 쿠키 등의 설치·운영 및 거부 : 이용자는 '쿠키'에 대한 선택권을 가지고 있습니다. 이용자는 웹브라우저에서 [도구 -> 인터넷옵션 -> 개인정보 -> 고급정보]에서 쿠키허용 수준을 설정하시면 됩니다. 단, 모든 쿠키의 저장을 거부하기로 선택한 경우 일부 서비스 제공에 어려움이 있을 수 있습니다.\n3. 회사는 이용자의 서비스 이용정보를 분석하는 자동화된 시스템을 사용하여 맞춤 콘텐츠 제공, 개인 맞춤광고, 서비스 이용방식에 맞춘 그 밖의 기능 등을 제공할 수 있습니다. 또한 이용자의 서비스 이용정보를 분석하여 스팸, 멀웨어, 불법 접속 등 악용사례 감지에 이용할 수 있습니다.",
      },
      {
        subtitle: "제 5조 개인정보처리방침의 변경 및 고지",
        text: "현 개인정보처리방침이 회사 또는 정부의 정책, 보안 기술의 변경에 따라 내용의 추가, 삭제 및 변경이 있을 경우, 회사는 변경사항의 시행 7일 전부터 어플리케이션, 웹사이트의 '공지사항' 등을 통해 고지할 것입니다. 변경된 개인정보처리방침은 변경 고지한 날로부터 7일 후부터 효력이 발생합니다.",
      },
      {
        subtitle: "부칙",
        text: "이 개인정보처리방침은 2025년 2월 10일부터 적용됩니다.",
      },
    ],
  },
  marketingInfo: {
    title: "광고성 정보 수신 동의",
    content: [
      {
        subtitle: "광고성 정보의 수신",
        text: "1. 회사는 이용자 맞춤형 서비스 및 상품 추천, 각종 이벤트, 행사 등의 광고성 정보를 전자우편, 문자(SMS, LMS 또는 카카오채널톡), 스마트폰 푸시 알림, 전화 등의 방법으로 이용자에게 제공할 수 있습니다. 다만, 이용자는 언제든지 전자우편 등을 통하여 수신을 거절할 수 있습니다.\n2. 광고성 정보의 수신 동의는 거부하실 수 있으며 동의 이후라도 이용자의 의사에 따라 동의를 철회할 수 있습니다. 개인정보보호법 제22조 제5항에 의해 동의를 거부하더라도 회사가 제공하는 서비스 이용이 제한되지 않습니다. 단, 할인, 이벤트 및 사용자 맞춤형 서비스 추천 등의 광고성 정보 안내 서비스가 제한됩니다.\n3. 회사에서 제공하는 광고성 정보를 원하지 않을 경우 언제든지 서비스 내부 설정 페이지를 통하여 철회를 요청하는 취지로 설정을 변경할 수 있습니다. 또한 향후 광고성 정보 수신에 새롭게 동의하고자 하는 경우에도 설정 페이지에서 동의할 수 있습니다.",
      },
    ],
  },
};

export default termsDetails;
