const prefectureMap = new Map([
  ["北海道", "HOKKAIDO"],
  ["青森県", "AOMORI"],
  ["岩手県", "IWATE"],
  ["宮城県", "MIYAGI"],
  ["秋田県", "AKITA"],
  ["山形県", "YAMAGATA"],
  ["福島県", "FUKUSHIMA"],
  ["茨城県", "IBARAKI"],
  ["栃木県", "TOCHIGI"],
  ["群馬県", "GUNMA"],
  ["埼玉県", "SAITAMA"],
  ["千葉県", "CHIBA"],
  ["東京都", "TOKYO"],
  ["神奈川県", "KANAGAWA"],
  ["新潟県", "NIIGATA"],
  ["富山県", "TOYAMA"],
  ["石川県", "ISHIKAWA"],
  ["福井県", "FUKUI"],
  ["山梨県", "YAMANASHI"],
  ["長野県", "NAGANO"],
  ["岐阜県", "GIFU"],
  ["静岡県", "SHIZUOKA"],
  ["愛知県", "AICHI"],
  ["三重県", "MIE"],
  ["滋賀県", "SHIGA"],
  ["京都府", "KYOTO"],
  ["大阪府", "OSAKA"],
  ["兵庫県", "HYOGO"],
  ["奈良県", "NARA"],
  ["和歌山県", "WAKAYAMA"],
  ["鳥取県", "TOTTORI"],
  ["島根県", "SHIMANE"],
  ["岡山県", "OKAYAMA"],
  ["広島県", "HIROSHIMA"],
  ["山口県", "YAMAGUCHI"],
  ["徳島県", "TOKUSHIMA"],
  ["香川県", "KAGAWA"],
  ["愛媛県", "EHIME"],
  ["高知県", "KOCHI"],
  ["福岡県", "FUKUOKA"],
  ["佐賀県", "SAGA"],
  ["長崎県", "NAGASAKI"],
  ["熊本県", "KUMAMOTO"],
  ["大分県", "OITA"],
  ["宮崎県", "MIYAZAKI"],
  ["鹿児島県", "KAGOSHIMA"],
  ["沖縄県", "OKINAWA"],
])

export class Prefecture {
  constructor(public name: string) {}

  get value() {
    return (
      prefectureMap.get(this.name) ||
      prefectureMap.get(`${this.name}都`) ||
      prefectureMap.get(`${this.name}府`) ||
      prefectureMap.get(`${this.name}県`) ||
      null
    )
  }
}

console.log(new Prefecture("京都").value)
