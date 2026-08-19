import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import {getListTeachers} from '../services/get-list-teachers'
import {ListTeachers} from './ListTeachers'

vi.mock('../services/get-list-teachers')

describe('ListTeachers', () => {
    it('display list of teachers', async () => {
        vi.mocked(getListTeachers).mockResolvedValue([{id: 1, firstName: 'cucou'}, {id: 1, firstName: 'cucou'}, {id: 1, firstName: 'cucou'}])

        render(<ListTeachers />)

        expect(await screen.findByText('Enseignants')).toBeInTheDocument()
        expect(await screen.findAllByRole('listitem')).toHaveLength(3)
    })
})