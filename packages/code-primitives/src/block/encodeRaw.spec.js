// Copyright 2017-2018 @polkadot/primitives-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import encodeRaw from './encodeRaw';

describe('encodeRaw', () => {
  it('encodes correctly (actual values)', () => {
    expect(
      encodeRaw(
        new Uint8Array([
          168, 135, 224, 93, 140, 222, 226, 83, 13, 116, 138, 197, 164, 6, 48, 190, 101, 18, 221, 166, 40, 179, 158, 112, 133, 154, 215, 198, 177, 76, 212, 228,
          1, 0, 0, 0, 0, 0, 0, 0,
          159, 216, 180, 61, 159, 12, 131, 80, 22, 196, 220, 94, 6, 222, 68, 159, 97, 60, 16, 69, 163, 149, 125, 138, 175, 36, 30, 93, 235, 4, 1, 168,
          245, 208, 141, 24, 250, 136, 158, 84, 67, 170, 59, 146, 17, 149, 62, 67, 254, 66, 126, 53, 20, 146, 252, 243, 137, 89, 224, 145, 252, 79, 109, 15,
          0, 0, 0, 0
        ]),
        [
          new Uint8Array([
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 188, 29, 21, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
          ]),
          new Uint8Array([
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
          ])
        ]
      )
    ).toEqual(
      new Uint8Array([
        168, 135, 224, 93, 140, 222, 226, 83, 13, 116, 138, 197, 164, 6, 48, 190, 101, 18, 221, 166, 40, 179, 158, 112, 133, 154, 215, 198, 177, 76, 212, 228, 1, 0, 0, 0, 0, 0, 0, 0, 159, 216, 180, 61, 159, 12, 131, 80, 22, 196, 220, 94, 6, 222, 68, 159, 97, 60, 16, 69, 163, 149, 125, 138, 175, 36, 30, 93, 235, 4, 1, 168, 245, 208, 141, 24, 250, 136, 158, 84, 67, 170, 59, 146, 17, 149, 62, 67, 254, 66, 126, 53, 20, 146, 252, 243, 137, 89, 224, 145, 252, 79, 109, 15, 0, 0, 0, 0, 2, 0, 0, 0,
        110, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 188, 29, 21, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        106, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ])
    );
  });
});