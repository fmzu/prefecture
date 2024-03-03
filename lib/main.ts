type Value =
  | "HOKKAIDO"
  | "AOMORI"
  | "IWATE"
  | "MIYAGI"
  | "AKITA"
  | "YAMAGATA"
  | "FUKUSHIMA"
  | "IBARAKI"
  | "TOCHIGI"
  | "GUNMA"
  | "SAITAMA"
  | "CHIBA"
  | "TOKYO"
  | "KANAGAWA"
  | "NIIGATA"
  | "TOYAMA"
  | "ISHIKAWA"
  | "FUKUI"
  | "YAMANASHI"
  | "NAGANO"
  | "GIFU"
  | "SHIZUOKA"
  | "AICHI"
  | "MIE"
  | "SHIGA"
  | "KYOTO"
  | "OSAKA"
  | "HYOGO"
  | "NARA"
  | "WAKAYAMA"
  | "TOTTORI"
  | "SHIMANE"
  | "OKAYAMA"
  | "HIROSHIMA"
  | "YAMAGUCHI"
  | "TOKUSHIMA"
  | "KAGAWA"
  | "EHIME"
  | "KOCHI"
  | "FUKUOKA"
  | "SAGA"
  | "NAGASAKI"
  | "KUMAMOTO"
  | "OITA"
  | "MIYAZAKI"
  | "KAGOSHIMA"
  | "OKINAWA"
  | null

type PrefectureNameJa =
  | "北海道"
  | "青森県"
  | "岩手県"
  | "宮城県"
  | "秋田県"
  | "山形県"
  | "福島県"
  | "茨城県"
  | "栃木県"
  | "群馬県"
  | "埼玉県"
  | "千葉県"
  | "東京都"
  | "神奈川県"
  | "新潟県"
  | "富山県"
  | "石川県"
  | "福井県"
  | "山梨県"
  | "長野県"
  | "岐阜県"
  | "静岡県"
  | "愛知県"
  | "三重県"
  | "滋賀県"
  | "京都府"
  | "大阪府"
  | "兵庫県"
  | "奈良県"
  | "和歌山県"
  | "鳥取県"
  | "島根県"
  | "岡山県"
  | "広島県"
  | "山口県"
  | "徳島県"
  | "香川県"
  | "愛媛県"
  | "高知県"
  | "福岡県"
  | "佐賀県"
  | "長崎県"
  | "熊本県"
  | "大分県"
  | "宮崎県"
  | "鹿児島県"
  | "沖縄県"

const prefectureMap = new Map<PrefectureNameJa, Value>([
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

const reversedPrefectureMap = new Map<Value, PrefectureNameJa>(
  Array.from(prefectureMap, ([key, value]) => [value, key]),
)

export class Prefecture {
  constructor(public value: Value) {}

  get nameJa() {
    return reversedPrefectureMap.get(this.value)
  }

  static fromTextJa(text: string) {
    const value =
      prefectureMap.get(text as never) ||
      prefectureMap.get(`${text}都` as never) ||
      prefectureMap.get(`${text}府` as never) ||
      prefectureMap.get(`${text}県` as never) ||
      null
    if (value === null) {
      return null
    }
    return new Prefecture(value)
  }

  static fromText(text: string) {
    const value = reversedPrefectureMap.get(text as never)
    if (value === undefined) {
      return null
    }
    return new Prefecture(text as never)
  }

  /**
   * 住所から都道府県を取得
   * @param address 住所
   * @returns
   */
  static fromAddress(address: string) {
    if (address.includes("大阪")) {
      return new Prefecture("OSAKA")
    }
    if (address.includes("京都")) {
      return new Prefecture("KYOTO")
    }
    if (address.includes("東京")) {
      return new Prefecture("TOKYO")
    }
    if (address.includes("北海道")) {
      return new Prefecture("HOKKAIDO")
    }
    const value = address.split("県")[0]
    return Prefecture.fromTextJa(value)
  }
}
